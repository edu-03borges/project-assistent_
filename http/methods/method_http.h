#include <iostream>
#include <string>
#include <algorithm>
#include <curl/curl.h>
#include <jsoncpp/json/json.h>

static size_t WriteCallback(char *contents, size_t size, size_t nmemb, char *buffer_in)
{
    ((std::string*)buffer_in)->append((char*)contents, size * nmemb);
    return size * nmemb;
}

Json::Value json_decode(std::string text)
{
    Json::Value root;
    Json::Reader reader;

    bool parsingSucessful = reader.parse(text, root);

    /* if(!parsingSucessful)
    {
        std::cout << "Error " << text << std::endl;
    } */

    return root;
}

using std::cout; using std::string;
using std::endl; using std::cin;
using std::transform; using std::toupper;

string capitalizeString(string s)
{
    transform(s.begin(), s.end(), s.begin(),
                    [](unsigned char c){ return toupper(c); });
    return s;
}

Json::Value method_http(std::string jsonstr, std::string url, std::string method, std::string authorization, long int *http_code)
{
    CURLcode ret;
    CURL *hnd;

    struct curl_slist *slist1;

    authorization = "Authorization: Bearer " + authorization;

    std::string readBuffer;
    Json::Value returN;

    slist1 = NULL;
    slist1 = curl_slist_append(slist1, "Content-Type: application/json");
    slist1 = curl_slist_append(slist1, authorization.c_str());

    hnd = curl_easy_init();
    curl_easy_setopt(hnd, CURLOPT_URL, url.c_str());
    curl_easy_setopt(hnd, CURLOPT_NOPROGRESS, 1L);
    curl_easy_setopt(hnd, CURLOPT_POSTFIELDS, jsonstr.c_str());
    curl_easy_setopt(hnd, CURLOPT_USERAGENT, "curl/7.38.0");
    curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, slist1);
    curl_easy_setopt(hnd, CURLOPT_MAXREDIRS, 50L);
    curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, capitalizeString(method).c_str());
    curl_easy_setopt(hnd, CURLOPT_TCP_KEEPALIVE, 1L);
    curl_easy_setopt(hnd, CURLOPT_POSTFIELDSIZE, jsonstr.length());

    curl_easy_setopt(hnd, CURLOPT_WRITEFUNCTION, WriteCallback);
    curl_easy_setopt(hnd, CURLOPT_WRITEDATA, &readBuffer);

    ret = curl_easy_perform(hnd);

    curl_easy_getinfo(hnd, CURLINFO_RESPONSE_CODE, http_code);
    curl_easy_cleanup(hnd);

    /* 
    std::cout << "\nCode HTTP: " << http_code << std::endl;
    std::cout << readBuffer << std::endl;
    */

   if(readBuffer.c_str())
        returN = json_decode(readBuffer);

    return returN;

}