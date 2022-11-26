#include <iostream>
#include <string>
#include <jsoncpp/json/json.h>

#define IP 1
#define TOKEN 2
#define KEY_AZURE 3
#define REGION_AZURE 4

#include "modules/routes/index.h"
#include "init.cpp"

char get_result();

void print_screen()
{
    std::string all[] = {
        "[0] - Exit",
        "[1] - Start Assistent",
        "[2] - Login",
        "[3] - Create Phrase",
        "[4] - Get Parameters",
        "[5] - Update Parameters"/* ,
        "[6] - Update Phrase"
     */};

    std::cout << endl;

    for(int i=0; i<6; i++)
    {
        ::cout << all[i] << std::endl;
    }

    std::cout << "\n" << "-> ";
}

char get_result()
{
    char done;
    
    cin >> done;
    setbuf(stdin, NULL);

    switch(done)
    {
        case '0':
            done = '\0';
            break;
        case '1':
            start_assistent();
            break;
        case '2':
            login_user();
            break;
        case '3':
            create_phrase_op();
            break;
        case '4':
            get_parameters_op();
            break;
        case '5':
            update_parameters_op();
            break;
        case '6':
            update_phrase_op();
            break;
        default:
            std::cout << "Key Invalid!" << std::endl;
            break;
    }

    return done;
}

int main(int argc, char **argv)
{
    long menu = 0;

    do {

        print_screen();
        menu = get_result();

    } while(menu);

    return 0;
}