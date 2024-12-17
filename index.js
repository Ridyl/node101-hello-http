const http = require('http');

const server = http.createServer(function(req, res) {
    console.log(req.method + req.url);
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end("Hello World");
});

server.listen(8080, 'localhost', null, function(){
    console.log('Server host is listening on localhost:8080');
});
