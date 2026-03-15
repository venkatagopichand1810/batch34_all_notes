

// // import the express 
// const express = require("express");

// // import .env variables 
// require("dotenv").config();

// //import the connection
// const connectDB = require("./config/db");

// // import the routes
// const userRoutes = require("./routes/userRoutes");

// // create the express app
// const app = express();

// // middlware to parse the JSON data 
// app.use(express.json())


// // connecting the database
// connectDB();

// // use the routes
// app.use("/", userRoutes);

// // read the port number from the .env

// const PORT = process.env.PORT;

// app.listen(PORT, () => {
//     console.log("Server is running at the port number 5004")
// })



const jwt = require("jsonwebtoken");

// secret key used to sign the token 

const SECRET_KEY = "sfhskdfhskdjfhskjfjhfjkehrejkhrjkdhfdhferjherhke";

const userData = {
    id: 101, 
    username: "venkat",
    role: "mentor"
}

// jwt.sign 
const token = jwt.sign(
   userData, 
   SECRET_KEY,
   {expiresIn: "1hr"} 
)

console.log("token", token)

// const token = "eyddhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAxLCJ1c2VybmFtZSI6InZlbmthdCIsInJvbGUiOiJtZW50b3IiLCJpYXQiOjE3NzM0NzM4NDQsImV4cCI6MTc3MzQ3NzQ0NH0.LkEBv1dXb-wW_qwtRF81C5jXoMdXaZa_pOx8UrbyiGs";


// jwt verify() valiates the token 
jwt.verify(token, SECRET_KEY, (err, decoded) => {

    // if token is invalid 
    if(err){
        console.log("token is invalid");
        return
    }

    console.log("decoded the token", decoded)
})


