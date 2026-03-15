// runs the code if the condtion is true

// let age = 16;
// if(age >= 18){
//     console.log("You are an adult")
// } else {
//     console.log("You are a minor")
// }
// let age = 16;
// let vote = (age >= 18) ? "You are an adult" : "You are a minor";
// console.log(vote)


// if, ...if else....if else...if else


let marks = 75;

if(marks >= 90){
    console.log("Grade: A")
} else if(marks >= 75){
    console.log("Grade: B")
} else if(marks >= 50){
    console.log("Grade: C")
} else {
    console.log("FAIl")
}

// let marks = 75

// let grade = (marks >= 90) ? "Grade: A" : 
//             (marks >= 75) ? "Grade: B" :
//             (marks >= 50) ? "Grade: C" : "FAIl";
// console.log(grade)

// login to the website

let username = "venkat";
let password = "venkat@1234";

let cartAmount = 1200;

// check login
if(username === "venkat" && password === "venkat@1234"){
    console.log("Login successfull")
} else {
    console.log("invalid username and pasword")
}

if(cartAmount >=1000){
    console.log("you got 10% discount")
} else {
    console.log("add more items to get the 10% discount")
}