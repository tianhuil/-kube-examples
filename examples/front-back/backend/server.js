var http = require('http');

var port = process.env.PORT || 80

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  var number = parseFloat(request.url.slice(1));
  response.writeHead(200);
  response.end((number + 1).toString());
};
var www = http.createServer(handleRequest);
www.listen(port);
