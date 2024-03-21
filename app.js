const http = require('http');
const routes = require('./routes');

const hostname = '127.0.0.1';
const port = process.env.PORT | 3000;

const server = http.createServer((req, res) => {

    urls = routes.urls;
    responseGiven = false;

    for (let i=0; i < urls.length; i++) {
        if (req.url.match(urls[i].urlReg)) {
            if (req.method != urls[i].method) {
                res.writeHead(405, 'Content-Type', 'text/json');
                res.write(JSON.stringify({message: 'Method not allowed'}));
                res.end();    
            }
            urls[i].func(req, res, req.url.split('/'));
            responseGiven = true;
            break;
        }
    }

    if (!responseGiven) {
        res.writeHead(404, 'Content-Type', 'text/json');
        res.write(JSON.stringify({message: 'Route not found'}));
        res.end();    
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at ${port}`);
})