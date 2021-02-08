const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {

    var pathname = url.parse(req.url).pathname;
    fs.readFile(pathname.substr(1), 'utf8', (err, data) => {
        if(err) {
            throw err;
        }else {
            console.log('data: ',data);
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.write(data.toString())
            res.end();
        }
        
    })
}) 

server.listen(3000, () => {
    console.log('server runs on port 3000');
})