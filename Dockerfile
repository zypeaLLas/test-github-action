
FROM node:18-alpine3.20


WORKDIR react-basic/

COPY package.json package-lock.json ./
RUN npm install
COPY . .

EXPOSE 3009


CMD ["npm", "start"]
