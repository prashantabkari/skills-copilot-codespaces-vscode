// create web server
const http = require('http');

// create server
http.createServer((req, res) => {
    // send response
    res.end('Hello World');
}).listen(3000, () => console.log('Server is running...'));