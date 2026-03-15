
// import student model
const Student = require("../models/Student")
// post the data

const createStudent =  async(req, res) => {
    try {

        // create the new student object
        const newStudent = new Student({
            name :req.body.name, 
            age: req.body.age, 
            course: req.body.course
        })

        // save the student to monodb 
        const savedStudent = await newStudent.save()

        // send the created student response
        res.status(201).json(savedStudent)

    } catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

// get api call(to read all the students)

const getAllStudents =  async(req, res) => {
    try {
        // fetch all the students from the mongodb
        const students = await Student.find();
        res.json(students); //send the students as json response

    } catch(error){
        // send the error response
        res.status(500).json({
            message: error.message
        })
    }
}


// export the student controllers
module.exports = {
    getAllStudents,
    createStudent
}