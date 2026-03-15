// if we wanted to work with strings we can use

// old way
const name = "rama";
var message = "hello " + name
console.log(message)


// new way
const name = "rama";
const message = `hello ${name}`
console.log(message)


var user = "Venkat";
var city = "bangalore";

var msg = "User " + user + " is from " + city; //old way
var msg = `User ${user} is from ${city}`
console.log(msg)

//  User venkat is from bangalore 

var a = 10; 
var b = 20; 
var result = "Sum is " + (a + b); //old way
var result = `Sum is ${a + b}`
console.log(result)


// multi line string, this will throw error when we have multiline strings
// var message = "hello today 
// we are going to discuss 
// about javascript latest features";

var message = `hello today 
we are going to discuss 
about javascript latest features`;

console.log(message)