var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html'});
  res.end('<h1>Hello Node!</h1>');
});
server.listen(3000);
console.log('> Listening at http://localhost:3000/ \n');
