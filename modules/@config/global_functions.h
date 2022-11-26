#include <iostream>
#include <string>
#include <jsoncpp/json/json.h>

#include "../../file_system.h"

void database_file_write(std::string email, std::string password);

Json::Value database_file_read();

std::string remove_accent(std::string str);
std::string return_data_json(int mode);

std::string return_data_json(int mode);

std::string return_data_json(int mode);

std::string return_data_json(int mode)
{
    Json::Value json_token = database_file_read();

    std::string ip = json_token["ip"].toStyledString();
    std::string token = json_token["token"].toStyledString();
    std::string key_azure = json_token["key_azure"].toStyledString();
    std::string region_azure = json_token["region_azure"].toStyledString();

    ip = remove_accent(ip);
    token = remove_accent(token);
    key_azure = remove_accent(key_azure);
    region_azure = remove_accent(region_azure);

    switch(mode)
    {
        case 1:
            return ip;
        case 2:
            return token;
        case 3:
            return key_azure;
        case 4:
            return region_azure;
    }
}

std::string remove_accent(std::string str)
{
    int size = str.length()-2;

    char text[size];

    for(int i=0; i<size; i++) text[i] = '\0';

    int t = 0;

    for(int i=1; i<(str.length())-2; i++)
    {
        if(str[i] != '\0')
        {
            text[t] = str[i];
            t++;
        }
    }

    std::string str_return = text;

    return str_return;
}