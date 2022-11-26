docker start database_assistent assistent

export SPEECHSDK_ROOT="$HOME/speechsdk"

export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:$SPEECHSDK_ROOT/lib/x64"

./main