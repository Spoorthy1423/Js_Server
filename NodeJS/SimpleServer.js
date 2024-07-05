const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    res.write(fs.readFileSync('./index.html'));

    res.end();
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () =>{
    console.log(`Server is running at http://${host}:${port}`);
});
