// import express server
const express = require("express");

// create the express application 
const app = express();

// define the port number
const PORT = 5004;

// middlware to read the json from the request body
app.use(express.json())


// create the student data

var students = [
    // student details
    {
        id: 1, 
        name: "ram",
        age: 20, 
        course : "BTech",
        email: "ram@gmail.com"
    },

    {
        id: 2, 
        name: "venkat",
        age: 25,
        course: "MTech",
        email: "venkat@gmail.com"
    },

    {
        id: 3, 
        name: "sree",
        age: 34, 
        course: "Mernstack",
        email: "sree@gmail.com"
    },

    {
        id: 4, 
        name: "naresh",
        age: 36, 
        course: "Mernstack",
        email: "naresh@gmail.com"
    },

    {
        id: 5, 
        name: "siva",
        age: 54, 
        course: "Mernstack",
        email: "siva@gmail.com"
    },

    {
        id: 6, 
        name: "rahul",
        age: 24, 
        course: "MTECh",
        email: "rahul@gmail.com"
    }
]

// simple api (endpoint)
app.get("/", (req, res) => {
    // send the response to browser
    res.send("WELCOME TO THE EXPRESS FIRST API")
})

// get api to fetch all the students
app.get("/students", (req, res) => {
    // send the student data as the JSON response
    res.json(students)
})



//get the total students count
app.get("/students/count", (req, res) => {
    // cal the total number of students
    const totalStudents = students.length;

    // send the total count as JSON response 
    res.json({
        totalStudents: totalStudents
    })
})

// get the student by ID
app.get("/students/:id", (req, res) => {

    // get the ID value from the URL parameter
    const studentId = parseInt(req.params.id);

    // find the student whose id matches the parameter
    const student = students.find(student => student.id === studentId);

    // if no student is found
    if(!student) {
        // return the message 
        return res.status(404).json({
            message: "Student is not found"
        })
    }

    res.json(student)

})



//get the student by course 
app.get("/students/course/:course", (req, res) => {

    // get the course value from the URL 
    const courseName = req.params.course;

    // filter the students based on the course 
    const filterStudents = students.filter(student => student.course === courseName);

    //send the filtered student list
    res.json(filterStudents)
})


//get the students by age

app.get("/students/age/:age", (req, res) => {

    // get the course value from the URL 
    const ageValue = parseInt(req.params.age);

    // filter the students based on the age 
    const ageResult = students.filter(student => student.age === ageValue);

    //send the filtered student list
    res.json(ageResult)
})

// post api call

app.post("/students", (req, res) => {
    const {id, name, age, course, email} = req.body;
    // create the new student object
    const newStudent = {
        id: id, 
        name: name, 
        age: age, 
        course: course,
        email: email
    }

    // add the new student to array of students 
    students.push(newStudent);

    //send the success response 
    res.json({
        message: "Student added successfully",
        student: newStudent
    })


})

// add multiple students
app.post("/students/bulk", (req, res) => {
    // get the multiple students from the body 
    const newStudents = req.body;

    // loop through each student
    newStudents.forEach(student => {
        //add the student to array
        students.push(student)
    })

    // send the response
    res.json({
        message: "Muliple students added successsfully",
        students: students
    })

});


// student login 
app.post("/students/login", (req, res) => {
    // get the email from the request body
    const {email} = req.body;

    // find the studnet by email
    const student = students.find(student => student.email === email);

    if(!student){
        return res.json({
            message: "Student is not found"
        })
    }

    // send the login success
    res.json({
        message: "Login successfull",
        student: student
    })
})



// delete api calls

// delete student by ID
app.delete("/students/:id", (req, res) => {
    // get the student id from the URL paremeter
    const studentId = parseInt(req.params.id);

    // find the index of the student
    const index = students.findIndex(student => student.id === studentId);

    // if student is found
    if(index === -1){
        return res.json({
            message: "Student is not found"
        })
    }

    // remove the student using splice 
    const deletedStudent = students.splice(index, 1);

    // send the response
    res.json({
        message: "Student is deleted successfully",
        student: deletedStudent
    })
})

// delete all the students

app.delete("/students", (req, res) => {
    // clear the entire students array
    students = [];
    // send the response 
    res.json({
        message: "All the students are deleted successfully"
    })
})


//delete students by Course

app.delete("/students/course/:course", (req, res) => {
    // get the course from the URL 
    const courseName = req.params.course;

    // filter students that are not this course
    students = students.filter(student => student.course !== courseName)

    // send the response
    res.json({
        message: `Studnets from ${courseName} deleted`,
        students: students
    })
})


//delete students by age

app.delete("/students/age/:age", (req, res) => {
    // get the age from the URL 
    const ageValue = parseInt(req.params.age);

    // filter students that are not this course
    students = students.filter(student => student.age !== ageValue)

    // send the response
    res.json({
        message: `Student from ${ageValue} deleted`,
        students: students
    })
})


// put and patch

// put wil replace entire object 

// update the entire student 

app.put("/students/:id", (req, res) => {

    // get the student id from the URL 
    const studentId = parseInt(req.params.id);


    // find the index of student in array
    const index = students.findIndex(student => student.id === studentId);

    // if student is not found
    if(index === -1){
        return res.status(404).json({
            message: "Student is not found"
        })
    }

    // get the updated data from the request body
    const{name, age, course, email} = req.body;

    // replace the entire student objet
    students[index] = {
        id: studentId, 
        name: name, 
        age: age, 
        course: course, 
        email: email
    }

    // send the updated student
    res.json({
        message: "student is updated",
        student: students[index]
    })
})


// patch is for the partial update, partial update
app.patch("/students/email/:id", (req, res) => {

    // get the student from the URL parameters
    const studentId = parseInt(req.params.id);

    //only email in the request body
    const {email} = req.body;

    // find the student in the array
     const student = students.find(student => student.id === studentId);

    //  if student is not found retrun error 
    if(!student){
        return res.status(404).json({
            message: "student is not found"
        })
    }

    // update the email 
    student.email = email;

    // send the response
    res.json({
        message: "Email updated successfully", 
        student: student
    })
})





app.listen(PORT, () => {
    console.log('server is running on the port number 5004')
})


// postman is used to check whether the api is working or not, 
// and also if we wnated to push the data, or add the new we can do using postman
