const http = require('http');

const hostname = '192.168.178.39';
const port = 3000;

const fs = require("fs")
let messages = [];

try {
    const data = fs.readFileSync("messages.db")
    messages = JSON.parse(data);
} catch (e) {

} 

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    // console.log(req.url, req.method)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === "/ardeshir") {
        res.end("You are Ardeshir")
    } else if (req.url === "/tannaz") {
        res.end("You are Tannaz2")
    } else if (req.url === '/send-message' && req.method === 'POST') {
        let body = ''
        req.on('data', function (data) {
            body += data;
            if (body.length > 1e6)
                req.connection.destroy();
        });

        req.on('end', function () {
            messages.push(JSON.parse(body));
            const fs = require("fs")
            fs.writeFileSync("messages.db", JSON.stringify(messages));
        });

        res.end('');

    } else if (req.url === '/get-messages' && req.method === 'GET') {
        res.end(JSON.stringify(messages))
    }
    else { res.end("Nothing") }
    // console.log()
    // console.log()
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});