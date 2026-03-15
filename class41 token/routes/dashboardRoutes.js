

const express = require("express");

const router = express.Router(); 

const verifyToken = require("../middleware/authMiddleware");

const dashboardController = require("../controller/dashboardController")


// protected route 
router.get("/dashboard", verifyToken, dashboardController.getDashboard)

module.exports = router;