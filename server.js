const http = require('http')

const server = http.createServer(function(req, res) {
    res.end("Hi, Selamat Datang di NodeJs");
});

server.listen(8000);

console.log("server running on http://localhost:8000");