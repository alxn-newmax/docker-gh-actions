FROM node:18-alpine
WORKDIR /usr/src
COPY package*.json ./
RUN npm ci
COPY . .
USER node
CMD ["npm", "run", "start"]