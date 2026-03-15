
const express = require("express"); //import the express module
const app = express(); //initiate the express app

// authetication middleware
const auth = (req, res, next) => {
    const isLogin = true;
    if(isLogin){
        next(); //allow access to dashboard...next middleware
    } else {
        res.send("unauthorized")
    }
}

// dashboard route
app.get("/dashboard", auth, (req, res) => {
    res.send("welcome to dashboard")
})

// start the server with the listen port number
app.listen(3000, () => {
    console.log("server is running")
})