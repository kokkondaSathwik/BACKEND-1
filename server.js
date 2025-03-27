//create http server


// import http module
// we are not using let keyword it will reassign different value to http
// so we are using const keyword
const http = require('http');
const url = require('url');

// create server
const server = http.createServer((req,res)=>{
    //find http req method
    //console.log("type of req is ",req.method);

    // find path of the url
    //console.log("path of url is ",req.url);

    //find query parameters
    //console.log("query parameters are ",url.parse(req.url,true).query);



    //get req handler
    if(req.method === 'GET'){
        if(req.url === '/users'){
            res.end('All Users')
        }
        if(req.url === '/products'){
            res.end('All Products')
        }
    }
    //post req handler
    if(req.method === 'POST'){
        if(req.url === '/create-user'){
            res.end('User Created')
        }
        if(req.url === '/create-product'){
            res.end('Product Created')
        }
    }
    //put req handler
    if(req.method === 'PUT'){
        res.end('User modified')
    }
    //delete req handler
    if(req.method === 'DELETE'){
        res.end('User deleted')
    }
});

//assign a port number to server
server.listen(5000,()=>console.log('Server is running on port 5000'));
