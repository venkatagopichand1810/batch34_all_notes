
const mongoose = require("mongoose");

// function to connect mongodb 
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database successfully connected")

    } catch(error){
        console.log("Database connection failure")
    }
}

module.exports = connectDB