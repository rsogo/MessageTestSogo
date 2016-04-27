var http = require('http');

http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
	    res.end('Hello World\n');
}).listen(process.env.port);

console.log('Server running at http://127.0.0.1:1337/' + process.env.port);

