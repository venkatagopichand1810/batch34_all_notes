
const mongoose = require("mongoose")
// connect to mongodb

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/march8th2026day");
        console.log("Mongodb connected successfully")
    } catch (error) {
        console.log("DB connection issues")
    }
}

module.exports = connectDB



