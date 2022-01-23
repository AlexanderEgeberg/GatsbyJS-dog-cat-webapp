FROM node:16

WORKDIR /app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn install

COPY . .

#ENV PORT=8000

EXPOSE 8000

CMD [ "yarn", "develop" ]