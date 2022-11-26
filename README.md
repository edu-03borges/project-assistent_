# Pré-requisitos

Uma conta na Azure Cloud com o serviço de Speech ativado.

Uma chave de assinatura para o serviço de fala. [Consulte e Experimente o serviço de fala gratuitamente ](https://learn.microsoft.com/pt-br/azure/cognitive-services/speech-service/overview#try-the-speech-service-for-free).

Um PC Linux com microfone e auto-falante funcionando.

Ubuntu 18.04.x - x64 bits.

**Docker**
**Docker-Compose v1.29.2**
**Nodejs v16.18.1**
**NPM**

Obs: Todos os software necessários são instalados automaticamente.

# Iniciar Aplicação

Dê um ```git clone``` dentro da pasta ```/home/**/Documents/``` se a pasta não exister você deve criá-la.
Execute o comando ```sudo su``` e logue com root. Logo em seguida rode o comando ```./build.sh``` para construir a applicação.

Edite o [database_file.json]:
Substitua a string ```YourSubscriptionKey``` por sua própria chave de assinatura.
Substitua a string ```YourServiceRegion``` por sua região de serviço da sua assinatura. Por exemplo, substitua por ```brazilsouth``` se estiver usando a assinatura de avaliação gratuita de 30 dias.

Se tudo ocorrer bem você pode executar o comando ```./start.sh``` para iniciar a aplicação.

# Como utilizar

Primeiramente selecione a opção [2] para logar com administrador pois será gerado um token dentro do file database_file.json que será usado para realizar requisições. Utilize os dados abaixo para login.

Email: admin_user@gmail.com
Password: stark

Se aparecer a mensagem ```Token Genered With Sucessful!``` é porque deu certo. 

Agora você pode criar uma frase selecionando a opção [3]. Em ```Enter the question:``` você coloca uma pergunta para fazer a assistente, em ```Enter the answer:``` o que você gostaria que a assistente respondesse e em ```Select a Language:``` o idioma para qual você quer criar esta frase. 

Opção [1] inicia o assistente e para **parar** basta falar ```Parar.``` e aguardar uns segundos.

Opção [4] pega os parametros do sistema e seram mostrados na tela através de um arquivo json

Opção [5] realiza o update em um dos parametros selecionado pelo usuario

# OBS

Testado apenas em ambiente ubuntu virtualizado com o Virtual Box.

# Algumas das Tecnologias Utilizadas

**C/C++**
**Docker**
**TypeScript**
**SQL**
**ORM**
**SHELL**
**MAKEFILE**
**JWT**
**JSON**
**HTTP**
**STREAMS**

# Boas Práticas

**SOLID**
**CLEAN CODE**

# Contato

Instagram: edu_03borges

Qualquer duvída é só mandar um direct.
