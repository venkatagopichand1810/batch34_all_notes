// const attendance = {
//     venkat: "present",
//     john: "absent",
//     ram: "present"
// };

// let marks = [90, 70, 60, 40];

// const print = marks.map(mark => mark + 2);

// console.log(marks)
// console.log(print)

// const users = [
//     {name: "venkat", age: 30},
//     {name: "ram", age: 100}
// ]

// const names = users.map(user => user.name);
// console.log(names)

// const users = {
//     name: "venkat",
//     age: 30
// }


// const names = Object.values(users).map(user => user)
// console.log(names)


const attendance = {
    Ram: "Present",
    Venkat: "Absent",
    Bhag: "Present",
    shiva: "Present",
    akhila: "Absent"

}
console.log("Attendance Report:")
for (let student in attendance) {
     console.log(student, ":", attendance[student])
}


let presentStudents = [];
let absentStudents = [];

for(let student in attendance){
    if(attendance[student] === "Present") {
        presentStudents.push(student)
    } else {
        absentStudents.push(student)
    }
}

console.log("Present Students", presentStudents);
console.log("Absent Students", absentStudents)


