FROM node:9.11.1-alpine

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]
# docker build -t hw2vue/hw2vue-frontend .
# docker run -p 8001:8080 --name hw2vue-frontend hw2vue/hw2vue-frontend