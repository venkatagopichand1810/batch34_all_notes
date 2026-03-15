// Array is used to store muliple values or collection of data in the single variable.

// []..squre bracket


// let mobiles = ["oppo", "vivo", "iphone"];

// accessing array elements will be done using index..index will start from "0"

// console.log(mobiles[0]);
// console.log(mobiles[1]);
// console.log(mobiles[2])


// array of objects, {}

// let students = [
//     {name: "pradeep", age: 20, grade: "A"}, //[0]
//     {name: "shivani", age: 21, grade: "B"}, //[1]
//     {name: "yuva", age: 24, grade: "C"} //[2]
// ];

// console.log(students[0]); 
// console.log(students[0].grade)


// array can store muliple values of differet data types

// let arr = ["ram", 20, true, {city: "bangalore", state: "KA", country: "india", street: "K R Puram"}, [1, 2, 3]];

// console.log(arr[3].street);
// console.log(arr[4][1])


let companies = [
    {
        name: "Wipro",
        employees: [
            {name: "akhila", role: "developer"},
            {name: "shiva", role: "tester"}
        ]

    },
    {
        name: "HCL",
        employees: [
            {name: "priya", role: "Senior Software Engineer"},
            {name: "Pradeep", role: "Manager"}
        ]

    },
]

console.log(companies[0].employees[1].name);