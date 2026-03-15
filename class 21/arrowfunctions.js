// arrow functions are the shorter syntax to write
//  the functions in javascript 

// normal function 
// function add(a, b) {
//     return a + b
// }
// console.log(add(10, 40));

// arrow function 

// const sum = (a, b) => a + b;

// console.log(sum(10, 40));

// noraml function 
// function greet(name) {
//     console.log("hello",name);
//     console.log("welcome")
// }
// greet("venkat")


// arrow function
//  const greet = (name) => {
//     console.log("hello",name);
//     console.log("welcome")
// }
// greet("venkat")


// normal function 
// function hello() {
//     return "hello all"
// }
// console.log(hello())

//arrow function 

// const hello = () =>  "hello all"
// console.log(hello())





const mobiles = ["LG", "OPPO", "VIVO"];

// i wanted to print this mobiles, older way
mobiles.forEach(function (mobile){
    console.log(mobile)
})


mobiles.forEach(mobile => {
    console.log(mobile)
})


const prices = [100, 500, 900, 200]; //original array
const expensive = prices.filter(function(price) {
    return price > 600
})

// const expensive = prices.filter(price => price > 50)

const double = prices.map(price => price * 2)

console.log(expensive);
console.log(double);
console.log(prices)
