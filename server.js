//create http server


// import http module
// we are not using let keyword it will reassign different value to http
// so we are using const keyword
var http = require('http');

// create server
const server = http.createServer();

//assign a port number to server
server.listen(5000,()=>console.log('Server is running on port 5000'));
