
const express = require("express");

const app = express(); 

// middleware to read the form data
app.use(express.urlencoded({extended: true}))

// serve the html form
app.get("/", (req, res) => {
    res.sendFile("/public/index.html");
})

// form submit
app.post("/login", (req, res) => {
    console.log("form data", req.body);
    res.send("Form data recieved")
})

app.listen(3000, () => {
    console.log("server is running")
})