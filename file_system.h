#include <iostream>
#include <string>
#include <jsoncpp/json/json.h>

Json::Value database_file_read();

std::string remove_accent(std::string str);
std::string return_data_json(int mode);

void database_file_write(std::string email, std::string password);

void database_file_write(std::string email, std::string password)
{
    FILE *file;

    Json::Value json_return;

    std::string jsonstr;
    std::string ip;

    json_return = database_file_read();

    ip = return_data_json(IP);

    json_return["token"] = remove_accent(router_user(ip, email, password));

    jsonstr = json_return.toStyledString();

    if(!(file = fopen("database_file.json", "wt")))
    {
        std::cout << "Failed to open file" << std::endl;
        return;
    }

    fprintf(file, "%s", jsonstr.c_str());

    std::cout << "Token Generated With Sucessful" << std::endl;

    fclose(file);
}

Json::Value database_file_read()
{
    FILE *file;

    Json::Value json_return;

    long int res;

    if(!(file = fopen("database_file.json", "rt")))
    {
        std::cout << "Failed to open file" << std::endl;
        return json_return;
    }

    fseek(file, 0L, SEEK_END);

    res = ftell(file);

    fseek(file, 0L, SEEK_SET);

    char all_json[res];

    fread(&all_json, res, 1, file);

    json_return = json_decode(all_json);

    fclose(file);

    return json_return;
}