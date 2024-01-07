FROM node:20-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]