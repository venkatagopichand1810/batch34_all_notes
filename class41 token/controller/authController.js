
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")

// register user

exports.registerUser = async (req, res) => {

    try {

        const{name, email, password} = req.body;

        // check if email is already taken or not 
        const userExists = await User.findOne({email});

        if(userExists){
            return res.status(400).json({
                message: "User is already exists"
            })
        }

        // generate the salt 
        const salt = await bcrypt.genSalt(10); //welcome123.... //dfhdjkfhe37e48374shfjh3hjsdfhbdjf.dfhdfh3

        // hash password ///encrypted password
        const hashedPassword = await bcrypt.hash(password, salt);


        // create new user
        const user = new User({
            name, 
            email, 
            password: hashedPassword
        })

        // save to the database 
        await user.save();

        res.status(201).json({
            message: "User registered successfully"
        })


    } catch(error){
        res.status(500).json({
            error: error.message
        })
    }
}



// login user


exports.loginUser = async (req, res) => {

    try {

        const{email, password} = req.body;

        // check if email is already taken or not 
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                message: "User is not exists, use the valid email"
            })
        }

        // compare password 
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({
                message: "invalid password, enter the proper password"
            })
        }


        // create the jwt token
        const token = jwt.sign(
            {
                id: user._id, 
                email: user.email
            },
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        );

        res.json({
            message: "Login successful",
            token
        })


    } catch(error){
        res.status(500).json({
            error: error.message
        })
    }
}




