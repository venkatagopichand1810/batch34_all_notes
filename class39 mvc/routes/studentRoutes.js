// import expres
const express = require("express");

const router = express.Router();

// import the controller
const studentController = require("../controller/studentController")


router.post("/studentspost", studentController.createStudent)

router.get("/students", studentController.getAllStudents);

module.exports = router;