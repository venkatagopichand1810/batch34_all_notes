// import the mongoose 
const mongoose = require("mongoose");

// creating the schema 
const userSchema = new mongoose.Schema({

    // name
    name: {
        type: String, 
        required: true
    },

    email: {
        type: String,
        required: true
    }

}, {timestamps: true});

// crate the model 
const User = mongoose.model("venkatstudents", userSchema)

module.exports = User;