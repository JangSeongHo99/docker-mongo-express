FROM node:12

#app directory
WORKDIR /usr/src/app

#package.json and package-lock.json
COPY package*.json ./

RUN npm install

#app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]