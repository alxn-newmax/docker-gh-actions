FROM node:18-alpine
WORKDIR /usr/src
COPY package*.json ./

EXPOSE 5000

# FROM base as development
# ENV NODE_ENV=development
RUN npm ci
COPY . .
USER node
CMD ["npm", "run", "start"]