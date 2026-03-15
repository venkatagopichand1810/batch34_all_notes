// find()..
// 1) returns the first matching element
// 2) if no element matches -> undefined

// let productPrices = [50, 120, 110, 150, 80, 200];

// let expensive = productPrices.find(price => price >100);

// console.log(expensive)


// i wanted to find the first student who scored > 50
// let students = [
//     {name: "ram", marks: 30},
//     {name: "venkat", marks: 45},
//     {name: "priya", marks: 60},
//     {name: "shivani", marks: 55}
// ]

// let passedStudent = students.find(student => student.marks >50);
// console.log(passedStudent.name)



// findIndex()..
// 1) returns the first index of the matching element
// 2) if no element matches -> undefined

// let students = [
//     {name: "ram", marks: 30},
//     {name: "venkat", marks: 45},
//     {name: "priya", marks: 60},
//     {name: "shivani", marks: 55}
// ]

// let passedStudent = students.findIndex(student => student.marks >50);
// console.log(passedStudent)



// findLast()..
// 1) returns the last matching element
// 2) if no element matches -> undefined

// let students = [
//     {name: "ram", marks: 30},
//     {name: "venkat", marks: 45},
//     {name: "priya", marks: 60},
//     {name: "shivani", marks: 55}
// ]

// let passedStudent = students.findLast(student => student.marks >50);
// console.log(passedStudent)



// findLastIndex()..
// 1) returns the last matching index element
// 2) if no element matches -> undefined

let students = [
    {name: "ram", marks: 30},
    {name: "venkat", marks: 45},
    {name: "priya", marks: 60},
    {name: "shivani", marks: 55}
]

let passedStudent = students.findLastIndex(student => student.marks >50);
console.log(passedStudent)