#include <iostream>
#include <string>
#include <jsoncpp/json/json.h>

#include "../../from_microphone/from_microphone.h"
#include "../../text_to_speech/text_to_speech.h"
#include "../../http/methods/method_http.h"

std::string router_user(std::string ip, std::string email, std::string password)
{
    Json::Value rootJsonValue;

    Json::Value rootJson;

    std::string json_return;
    std::string jsonstr;
    std::string url;

    long int http_code = 0;

    url = "http://" + ip + ":9512/user/login";

    rootJsonValue["email"] = email;
    rootJsonValue["password"] = password;

    jsonstr = rootJsonValue.toStyledString();

    rootJson = method_http(jsonstr, url, "POST", " ", &http_code);

    json_return = rootJson["token"].toStyledString();

    return json_return;
}

void get_phrase(std::string ip, std::string authorization, std::string question)
{
    Json::Value rootJsonValue;

    std::string str_speech;
    std::string jsonstr;
    std::string url;
    std::string text;

    long int http_code = 0;

    url = "http://" + ip + ":9512/phrase/get";

    rootJsonValue["question"] = question;

    jsonstr = rootJsonValue.toStyledString();

    rootJsonValue = method_http(jsonstr, url, "GET", authorization, &http_code);

    text = rootJsonValue["message"].toStyledString();

    if(http_code == 200) 
        synthesizeSpeech(text);
    else
        std::cout << rootJsonValue << std::endl;
}

void create_phrase(std::string ip, std::string authorization, std::string question, std::string answer, int language)
{
    Json::Value rootJsonValue;

    std::string jsonstr;
    std::string url;

    long int http_code = 0;

    url = "http://" + ip + ":9512/phrase/create";

    rootJsonValue["language"] = language;
    rootJsonValue["phrase"]["question"] = question;
    rootJsonValue["phrase"]["answer"] = answer;

    jsonstr = rootJsonValue.toStyledString();

    method_http(jsonstr, url, "POST", authorization, &http_code);

    if(http_code == 200) std::cout << "Phrase created!" << std::endl;    
}

void update_phrase(std::string ip, std::string authorization, std::string question, std::string answer, int language)
{
    Json::Value rootJsonValue;

    std::string jsonstr;
    std::string url;

    long int http_code = 0;

    url = "http://" + ip + ":9512/phrase/update";
    
    rootJsonValue["language"] = language;
    rootJsonValue["phrase"]["question"] = question;
    rootJsonValue["phrase"]["answer"] = answer;

    jsonstr = rootJsonValue.toStyledString();

    method_http(jsonstr, url, "PATCH", authorization, &http_code);

    if(http_code == 200) std::cout << "Phrase updated!" << std::endl;    
}

void get_parameters(std::string ip, std::string authorization)
{
    Json::Value rootJsonValue;

    std::string jsonstr;
    std::string url;

    long int http_code = 0;

    url = "http://" + ip + ":9512/parameters/get";

    rootJsonValue["NULL"] = 0;

    jsonstr = rootJsonValue.toStyledString();

    rootJsonValue = method_http(jsonstr, url, "GET", authorization, &http_code);

    if(http_code == 200)
        std::cout << rootJsonValue << std::endl;
    else
        std::cout << http_code << "Error in search parameters" << std::endl;    
}

void update_parameters(const std::string ip, std::string authorization, int language, int select_ai)
{
    Json::Value rootJsonValue;

    std::string jsonstr;
    std::string url;

    long int http_code = 0;

    url = "http://" + ip + ":9512/parameters/update";

    if(language)
        rootJsonValue["language"] = language;
    if(select_ai)
        rootJsonValue["select_ai"] = select_ai;

    jsonstr = rootJsonValue.toStyledString();

    method_http(jsonstr, url, "PATCH", authorization, &http_code);

    if(http_code == 200)
        std::cout << "Parameters update sucess!" << std::endl;
    else
        std::cout << "Parameters update failure!" << std::endl;
}
