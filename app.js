const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    fs.readFile('index.html', function (error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});