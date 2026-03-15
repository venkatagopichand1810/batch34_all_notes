// import the model 
const User = require("../models/User");
// POST API -> CREATE THE USER

exports.createUser = async(req, res) => {

    try {
        // extract the data from the request body
        const{ name, email} = req.body;

        // creating the new user 

        const user = new User({
            name: name, 
            email: email
        })

        // save the document in the mongodb 
        const savedUser = await user.save()

        // send the response 

        res.status(201).json({
            message: "User created successfully",
            data: savedUser
        })


    } catch(error){
        console.log("server errror", error)
    }
}

exports.getUsers = async(req, res) => {
    
    try {
        // retrieving all the user information from the database

        const users = await User.find();

        // send the response 
        res.status(200).json({
            message: "Users fetched successfully",
            data: users
        })
    } catch(error){

        // error response
        res.status(500).json({
            message: "Error fetching the users",
            error: error.message
        })
    }
}