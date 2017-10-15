FROM mhart/alpine-node:8
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --production

FROM mhart/alpine-node:base-8
WORKDIR /app
COPY --from=0 /app .
COPY . .
EXPOSE 80
CMD ["node", "server.js"]
