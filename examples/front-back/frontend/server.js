var http = require('http');

var backend = process.env.BACKEND,
    port = process.env.PORT || 80

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  http.get(backend + request.url, function(res) {
    res.setEncoding('utf8');
    var rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      response.writeHead(200);
      response.end(rawData);
    });
  });
};
var www = http.createServer(handleRequest);
www.listen(port);
