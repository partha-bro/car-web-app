FROM node:16.0-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 6000
CMD [ "npm","start" ]