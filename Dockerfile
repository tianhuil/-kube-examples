FROM node:6.9.2
EXPOSE 80
COPY server.js .
CMD node server.js
