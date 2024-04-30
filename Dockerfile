FROM node:18-alpine as base
WORKDIR /usr/src
COPY package*.json ./

EXPOSE 5000

FROM base as development
ENV NODE_ENV=development
RUN npm ci
COPY --chown=node:node . ./
USER node
CMD ["npm", "run", "start"]