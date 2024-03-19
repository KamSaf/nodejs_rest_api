const http = require('http');
const routes = require('./routes');

const hostname = '127.0.0.1';
const port = process.env.PORT | 3000;

const server = http.createServer((req, res) => {

    urls = routes.urls;
    responseGiven = false;
    urls.forEach(url => {
        if (req.url.match(url.urlReg)) {
            if (req.method != url.method) {
                res.writeHead(405, 'Content-Type', 'text/json');
                res.write(JSON.stringify({message: 'Method not allowed'}));
                res.end();    
            }
            url.func(req, res, req.url.split('/'));
            responseGiven = true;
        }
    });

    if (!responseGiven) {
        res.writeHead(404, 'Content-Type', 'text/json');
        res.write(JSON.stringify({message: 'Route not found'}));
        res.end();    
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at ${port}`);
})