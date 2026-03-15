
const mongoose = require("mongoose")
// mongoose schema

const studentSchema = new mongoose.Schema({
    name: String, 
    age: Number, 
    course: String
})

// create the model using schema
const Student = mongoose.model("Students", studentSchema);

// export model
module.exports = Student