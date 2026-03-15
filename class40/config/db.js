// import the mongoose library 
const mongoose = require("mongoose");

// functin to connect the database

const connectDB = async () => {
    try {
        // connecting the mongodb using the mongodb url 
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Mongodb connected successfully")
    } catch(error){
        console.log("Database connection error")
    }
}

// export the function 
module.exports = connectDB