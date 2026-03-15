

const jwt = require("jsonwebtoken");

// middleware to verify token

const verifyToken = (req, res, next) => {

    // get authroization header
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({
            message: "Token is missing, you are not the valid user"
        })
    }

    try {
        const token = authHeader.split(" ")[1];

        // verify the token 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // attach the user to request 
        req.user = decoded;
        next();
    } catch(error){
        res.status(401).json({
            message: "invalid token"
        })
    }
}

module.exports = verifyToken