FROM node:10-alpine
WORKDIR /home/ubuntu/app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "run prod"]
