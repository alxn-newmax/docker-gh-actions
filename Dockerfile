FROM node:18
WORKDIR /usr/src
COPY package*.json ./

ENV TZ=Europe/Moscow

EXPOSE 4900

RUN npm install

COPY . ./

CMD ["npm", "run", "start"]