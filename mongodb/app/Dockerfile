FROM mhart/alpine-node:8

# Create app directory
WORKDIR /app
COPY . .

RUN npm install --production

COPY . .
EXPOSE 80
CMD ["node", "server.js"]
