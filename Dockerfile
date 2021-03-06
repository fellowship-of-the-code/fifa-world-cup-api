FROM node:18-alpine3.14

WORKDIR /app

COPY . .

RUN yarn install

CMD yarn start
