
const express = require("express");

// create the router object
const router = express.Router();

const userController = require("../controller/userController");

// post api route
router.post("/users", userController.createUser);

// get api route
router.get("/getusers", userController.getUsers);


// export the router
module.exports = router;