import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
    try {
        await mongoose.connect(DATABASE_URL); //where we are going to connect to mongodb
        console.log("Database connected successfully")
    } catch(error){
        console.log(error)
    }
}

export default connectDB