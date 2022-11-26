FROM node

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 9512

CMD ["npm", "run", "dev"]