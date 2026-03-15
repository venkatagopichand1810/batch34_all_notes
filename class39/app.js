import express from "express";
import connectDB from "./db/connectDB.js";
const app = express(); //to create the express app
const PORT = 5004;
const DATABASE_URL = "mongodb://127.0.0.1:27017/8thMarch2026";
import { allDocs } from "./models/Movie.js";

connectDB(DATABASE_URL);

// create and save the document
allDocs()

app.listen(PORT, () => {
    console.log("server is running at the port number 5004")
})