const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === "/ardeshir") {
        res.end("You are Ardeshir")
    } else if (req.url === "/tannaz") {
        res.end("You are Tannaz")
    }
    else { res.end("Nothing") }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});