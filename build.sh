sudo apt-get update
sudo apt-get install -y build-essential libssl-dev libasound2 wget

sudo apt install -y libcurl4-openssl-dev
sudo apt install -y libjsoncpp-dev

sudo apt install  -y python3
sudo apt install -y python-pip
sudo pip install -y pygame

cd shs

./docker_install.sh
./nodejs_install.sh

cd /home/**/Documents/project-assistent_

export SPEECHSDK_ROOT="$HOME/speechsdk"

source ~/.bashrc

mkdir -p "$SPEECHSDK_ROOT"

wget -O SpeechSDK-Linux.tar.gz https://aka.ms/csspeech/linuxbinary
tar --strip 1 -xzf SpeechSDK-Linux.tar.gz -C "$SPEECHSDK_ROOT"

ls -l "$SPEECHSDK_ROOT"

export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:$SPEECHSDK_ROOT/lib/x64"

source ~/.bashrc

cd api-module/

npm install

docker-compose up -d

npm run typeorm migration:run

npm run seed

cd ..

make
