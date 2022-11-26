//
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.md file in the project root for full license information.
//

// <code>
#include <iostream> // cin, cout
#include <speechapi_cxx.h>

using namespace std;
using namespace Microsoft::CognitiveServices::Speech;

std::string return_data_json(int mode);

void synthesizeSpeech(std::string str_speech)
{
    std::string key_azure = return_data_json(KEY_AZURE);
    std::string region_azure = return_data_json(REGION_AZURE);

    auto config = SpeechConfig::FromSubscription(key_azure, region_azure);

    config->SetSpeechSynthesisVoiceName("pt-BR-AntonioNeural");

    auto synthesizer = SpeechSynthesizer::FromConfig(config);

    cout << "Type some text that you want to speak..." << std::endl;
    cout << "> ";
    
    auto result = synthesizer->SpeakTextAsync(str_speech).get();

    if (result->Reason == ResultReason::SynthesizingAudioCompleted)
    {
        cout << "Speech synthesized to speaker for text => " << str_speech << std::endl;
    }
    else if (result->Reason == ResultReason::Canceled)
    {
        auto cancellation = SpeechSynthesisCancellationDetails::FromResult(result);
        cout << "CANCELED: Reason=" << (int)cancellation->Reason << std::endl;

        if (cancellation->Reason == CancellationReason::Error)
        {
            cout << "CANCELED: ErrorCode=" << (int)cancellation->ErrorCode << std::endl;
            cout << "CANCELED: ErrorDetails=[" << cancellation->ErrorDetails << "]" << std::endl;
            cout << "CANCELED: Did you update the subscription info?" << std::endl;
        }
    }
}