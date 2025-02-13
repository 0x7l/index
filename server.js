const http = require('http');

const PORT = 4444;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Node Js - Web Server</h1>");
    res.end("Errrm");
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});