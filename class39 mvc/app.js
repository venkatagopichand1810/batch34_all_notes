// import express to create the express app
const express = require("express");

// import connection db
const connectDB = require("./config/db");

//import the routes
const studentRoutes = require("./routes/studentRoutes")

// create the express application 
const app = express();

app.use(express.json()); //middleware to read JSOn from the request body

connectDB();

app.use("/", studentRoutes)


// start the server
app.listen(5005, () => {
    console.log("server is running at the port 5005")
})