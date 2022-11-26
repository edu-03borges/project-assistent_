#include <iostream>
#include <string>
#include <jsoncpp/json/json.h>

#include "modules/@config/global_functions.h"

void database_file_write(std::string email, std::string password);

std::string return_data_json(int mode);

void login_user()
{
    std::string email;
    std::string password;

    std::cout << "\nEnter the email: " << std::endl;
    std::cout << "-> ";
    cin >> email;
    setbuf(stdin, NULL);

    std::cout << "\nEnter the password: " << std::endl;
    std::cout << "-> ";
    cin >> password;
    setbuf(stdin, NULL);

    database_file_write(email, password);
}

void start_assistent()
{
    std::string ip = return_data_json(IP);
    std::string token = return_data_json(TOKEN);

    recognizeSpeech(ip, token);
}

void create_phrase_op()
{
    std::string question_s;
    std::string answer_s;

    std::string ip = return_data_json(IP);
    std::string token = return_data_json(TOKEN);

    int language = 0;

    setbuf(stdin, NULL);

    std::cout << "Enter a question: " << std::endl;
    std::cout << "-> ";
    getline(cin, question_s);
    setbuf(stdin, NULL);

    std::cout << std::endl;

    std::cout << "Enter a answer: " << std::endl;
    std::cout << "-> ";
    getline(cin, answer_s);
    setbuf(stdin, NULL);
       
    std::cout << "Select a language: " << std::endl;
    std::cout << "[1] - Portuguese" << "\n[2] - Engish" << "\n[3] - Spanish" << std::endl;
    std::cout << "-> ";
    cin >> language;
    setbuf(stdin, NULL);

    create_phrase(ip, token, question_s, answer_s, language);
}

void update_phrase_op()
{

}

void get_parameters_op()
{
    std::string ip = return_data_json(IP);
    std::string token = return_data_json(TOKEN);

    get_parameters(ip, token);
}

void update_parameters_op()
{
    std::string ip = return_data_json(IP);
    std::string token = return_data_json(TOKEN);

    int language = 0;
    int select_ai = 0;

    int done;

    std::cout << "Choose a parameter to update: " << std::endl;
    std::cout << "[1] - Language" << "\n[2] - Select_ai" << std::endl;
    std::cout << "-> ";
    cin >> done;
    setbuf(stdin, NULL);

    if(done==1)
    {
        std::cout << "Select a language: " << std::endl;
        std::cout << "[1] - Portuguese" << "\n[2] - Engish" << "\n[3] - Spanish" << std::endl;
        std::cout << "-> ";
        cin >> language;
        setbuf(stdin, NULL);
    } 
    else if(done==2)
    {
        std::cout << "Select a IA: " << endl;
        std::cout << "-> ";
        cin >> select_ai;
        setbuf(stdin, NULL);
    }

    update_parameters(ip, token, language, select_ai);

}