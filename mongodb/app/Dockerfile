FROM mhart/alpine-node:8

WORKDIR /app
COPY package.json .

# If you have native dependencies, you'll need extra tools
# RUN apk add --no-cache make gcc g++ python

RUN yarn install --production
EXPOSE 80
COPY server.js .
CMD ["dumb-init", "node", "server.js"]
