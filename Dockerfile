FROM node:20-alpine

WORKDIR /app

ENV DOCKERIZE_VERSION v0.7.0

RUN apk update --no-cache \
  && apk add --no-cache wget openssl \
  && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
  && apk del wget

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 8000

CMD ["dockerize", "-wait", "tcp://mysql:3306", "-timeout", "20s", "npm", "start"]