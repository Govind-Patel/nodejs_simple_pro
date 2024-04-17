FROM node:letest
RUN npm install -g nodemon
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm","run","dev"]
# CMD [ "node","index.js" ]
