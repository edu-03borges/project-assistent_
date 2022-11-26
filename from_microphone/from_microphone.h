//
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.md file in the project root for full license information.
//

// <code>
#include <iostream> // cin, cout
#include <speechapi_cxx.h>

using namespace std;
using namespace Microsoft::CognitiveServices::Speech;

void get_phrase(std::string ip, std::string authorization, std::string question);

std::string return_data_json(int mode);

std::string text_ai;

void recognizeSpeech(std::string ip, std::string authorization)
{
    std::string key_azure = return_data_json(KEY_AZURE);
    std::string region_azure = return_data_json(REGION_AZURE);

    auto config = SpeechConfig::FromSubscription(key_azure, region_azure);

    config->SetSpeechRecognitionLanguage("pt-BR");

    auto recognizer = SpeechRecognizer::FromConfig(config);

    promise<void> recognitionEnd;

    recognizer->Recognizing.Connect([](const SpeechRecognitionEventArgs &e)
                                    { cout << "Recognizing:" << e.Result->Text << std::endl; });

    recognizer->Recognized.Connect([&recognizer, ip, authorization](const SpeechRecognitionEventArgs &e)
    {
        if (e.Result->Reason == ResultReason::RecognizedSpeech)
        {
            cout << "RECOGNIZED: Text=" << e.Result->Text 
                 << " (text could not be translated)" << std::endl;
                 
            if(e.Result->Text == "Parar.")
                recognizer->StopContinuousRecognitionAsync().get();

            get_phrase(ip, authorization, e.Result->Text);
        }
        else if (e.Result->Reason == ResultReason::NoMatch)
        {
            cout << "NOMATCH: Speech could not be recognized." << std::endl;
        }
    });

    recognizer->Canceled.Connect([&recognitionEnd](const SpeechRecognitionCanceledEventArgs &e)
    {
        cout << "CANCELED: Reason=" << (int)e.Reason << std::endl;
        if (e.Reason == CancellationReason::Error)
        {
            cout << "CANCELED: ErrorCode=" << (int)e.ErrorCode << "\n"
                 << "CANCELED: ErrorDetails=" << e.ErrorDetails << "\n"
                 << "CANCELED: Did you set the speech resource key and region values?" << std::endl;

            recognitionEnd.set_value(); // Notify to stop recognition.
        }
    });

    recognizer->SessionStopped.Connect([&recognitionEnd](const SessionEventArgs &e)
    {
        cout << "Session stopped.";
        recognitionEnd.set_value(); // Notify to stop recognition. });
    });

    recognizer->StartContinuousRecognitionAsync().get();

    recognitionEnd.get_future().get();
}