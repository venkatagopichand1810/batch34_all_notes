// variable is the container....

//in JS, we can declare the variables in muliple ways

//var is the keyword

//1)  simple declaration

// var name; //declare
// name = "venkat"; //assignment
// console.log(name)

// var value = 100;
// console.log(value)


// 2) Re-declaration, is allowed in var
// var mobile = "LG";
// var mobile = "iphone"; //allowed in js (var)
// console.log(mobile); //iphone


//3) re-assignment is allowed
// var country = "usa"; //declare and assginemnt
// country = "india"; //reassginment
// console.log(country)


// 4) function scope of var

// function test() { //function declaration
//     var x = 100;
//     console.log("inside the function:", x)
// }//closed
// // console.log(x); //not possible
// test(); //call the function to get the output
// // console.log("outside the function", x)

// 5: 

// var lastname = "srivani"; //global scope, it can accessible anywhere


// function something() {
//     firstName = "pradeep"; //implicit global
//     var hero = "yokesh"; //this is the function
//     console.log("inside the function", lastname)
// };

// something(); //fuction call

// console.log("outside of the function", firstName); //pradeep
// // console.log(hero); //yokesh
// console.log(lastname); //srivani


// function pradeep(){
//     var name = "pradeep";
//     console.log(name)
// }
// pradeep(); //function call


//shadowing the var

// var value = 10; //global
// console.log(value); //10

// function valueFun() {
//     value = 20; //function
//     console.log(value); //20
// }

// var value = 100; 
// valueFun(); //function call is closed


// console.log("outside", value); //20


//when we declare the variable with var, in case block it can be accessible even outside of the block

// console.log(name)
// if(true){
//     var name = "venkat";
//     console.log(name)
// }
// console.log(name)


