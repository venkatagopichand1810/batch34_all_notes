// create the node js server....http module(in built module)

const http = require("http"); //this http module helps us to create the web server

const server = http.createServer((req, res) => {
    // req object contains the information about the incoming request 
    // res object is used to send the response back to the client

    res.writeHead(200, {"content-type" : "text/plain"});

    res.write("hello hi everyone")

    res.end(); //end the response, 
})

// define the port number
const PORT = 7009;

server.listen(PORT, () => {
    console.log("server is running on http://localhost:7009")
})