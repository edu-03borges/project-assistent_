rm main

export SPEECHSDK_ROOT="$HOME/speechsdk"

export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:$SPEECHSDK_ROOT/lib/x64"

make

./main