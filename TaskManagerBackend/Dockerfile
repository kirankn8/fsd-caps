FROM node:10

# Create app directory
WORKDIR /usr/src/backend

COPY package*.json ./
RUN npm install pm2 -g 
RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "pm2", "start", "index.js" ]