var http = require('http');

var greeting = process.env.GREETING

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end(greeting);
};
var www = http.createServer(handleRequest);
www.listen(9000);
