const http = require('http');

const hostname = '192.168.178.39';
const port = 3000;

let messages=[];

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    console.log(req.url, req.method)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === "/ardeshir") {
        res.end("You are Ardeshir")
    } else if (req.url === "/tannaz") {
        res.end("You are Tannaz2")
    } else if (req.url === '/send-message' && req.method === 'POST') {
        let message = ''
        req.on('data', function (data) {
            message += data;
            if (message.length > 1e6)
                req.connection.destroy();
        });

        req.on('end', function () {
            console.log('i have body', message);
            messages.push(message);
            console.log(messages, '\n', '\n')
        });

        res.end(''); 

    } else if(req.url === '/get-messages' && req.method === 'GET') {
        res.end(messages.toString())
    }
    else { res.end("Nothing") }
    console.log()
    console.log()
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});