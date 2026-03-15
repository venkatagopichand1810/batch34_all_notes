// filter -> returns all the matching elements into the new array

// let students = [
//     { name: "ram", marks: 65 },
//     { name: "venkat", marks: 60 },
//     { name: "shiva", marks: 70 },
//     { name: "priya", marks: 30 },
//     { name: "yuvan", marks: 34 },
//     { name: "akhila", marks: 32 },
// ]

// let passedStudents = students.filter(student => student.marks>=36);
// console.log(passedStudents)

// let failedStudents = students.filter(student => student.marks<=36);
// console.log(failedStudents)


let products = [
    {item: "oppo", stock: 10},
    {item: "phone", stock: 2},
    {item: "iphone 18", stock: 0}
];

let availableProducts = products.filter(p => p.stock > 0);
console.log(availableProducts)


// some -> retruns true, if atleast one element matches

// check if the student is failed

// let marks = [90, 100, 89, 30, 92, 91];

// let hasFailed = marks.some(score => score < 36);
// console.log(hasFailed)


// check if any item is out of the stock


// let products = [
//     {item: "oppo", stock: 10},
//     {item: "phone", stock: 2},
//     {item: "iphone 18", stock: 10}
// ];

// let outOfstock = products.some(p => p.item === 0);
// console.log(outOfstock)


//every method..returns true if all the elements match
let swiggyOrder = [
    {name: "biryani", deilvered: true},
    {name: "pizza", deilvered: true},
    {name: "burger", deilvered: true},
    {name: "cool drink", deilvered: true},
]

let allDelivered = swiggyOrder.every(order => order.deilvered);
console.log(allDelivered)