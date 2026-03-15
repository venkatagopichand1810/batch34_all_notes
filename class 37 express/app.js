// node js server 

// http module 

const http = require("http");

// create the server

const server = http.createServer((req, res) => {
    // check the url
    if(req.url === "/"){
        res.write("welcome to home page")
    } else if(req.url=== "/about"){
        res.write("About page")
    } else {
        res.write("page is not found")
    }
    
    // end the response
    res.end();
})

// start the server with the listen port number
server.listen(3000, () => {
    console.log("server is running")
})