
FROM node:20-alpine3.19

WORKDIR react-basic/

COPY package.json package-lock.json ./
RUN npm install
COPY . .

EXPOSE 3009


CMD ["npm", "start"]
