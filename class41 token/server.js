

const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db")

// routes
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes")

// load the environment variables 
dotenv.config();

// connect to the database
connectDB(); 

//create the express app
const app = express();

// middleware 
app.use(express.json())

//auth routes 
app.use("/",authRoutes);

// dashboard routes
app.use("/", dashboardRoutes)


app.listen(process.env.PORT, () => {
    console.log("server is running ")
})