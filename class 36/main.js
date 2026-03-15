// create the node js server....http module(in built module)

const http = require("http"); //this http module helps us to create the web server

const server = http.createServer((req, res) => {
    // req object contains the information about the incoming request 
    // res object is used to send the response back to the client

    if (req.url === "/") {

        // home page
        res.writeHead(200, { "content-type": "text/plain" });
        res.end("Welcome to shopping website")
    } else if (req.url === "/products") {
        // product page
        res.writeHead(200, { "content-type": "application/json" });

        const products = [
            { id: 1, name: "laptop", price: 2000 },
            { id: 2, name: "mobile", price: 5000 },
        ]

        res.end(JSON.stringify(products))

    } else if (req.url === "/kidswear") {

        res.writeHead(200, { "content-type": "text/html" });
        res.end(
            `
             <h1>Kidswear</h1>
             <ol>
                <li>Top wear </li>
                <li>Bottom Wear </li>
             </ol>
            
            `
        )
    } else {

        res.writeHead(200, { "content-type": "text/html" });

        res.write("<h1>Page is not found </h1>")

        res.end(); //end the response, 

    }


})

// define the port number
const PORT = 7009;

server.listen(PORT, () => {
    console.log("server is running on http://localhost:7009")
})