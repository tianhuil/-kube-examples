FROM mhart/alpine-node:10.8

RUN mkdir /var/src
WORKDIR /var/src
COPY package.json .
RUN npm install

CMD ["npx", "http-echo-server"]
