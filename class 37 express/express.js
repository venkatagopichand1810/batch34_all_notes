// express js server 
// express module 
const express = require("express");
// create the express app
const app = express()
// routes
app.get("/", (req, res) => {
    res.send("welcome to home page")
})
app.get("/about", (req, res) => {
    res.send("welcome to about page")
})
app.get("/api/users", (req, res) => {
    try {
        res.json({
            name: "venkat",
            city: "bangalore",
            state: "KA",
            country: "india"
        })
    } catch (error) {
        console.log(error)
    }

})

// start the server with the listen port number
app.listen(3000, () => {
    console.log("server is running")
})