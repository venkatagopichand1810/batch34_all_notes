// hoisting: 
// 1) by default in javascript variables will move the declarations to top of the scope.
// 2) only function declarations are moved to top the scope but not other kind of functions



// // console.log(name)
// let name = "ram";  
// console.log(name)


//notes: 

//1) in case of var, we are going to get undefined,  declarations to top of the scope(hoisting)
//2) in case of let and const, they are hoisted but they are TDZ(Temporal dead zone)..Cannot access 'name' before initialization





// //behind the screens

// var name;
// console.log(name)
// name = "ram"


// welcome(); //this will work

// function welcome(){
//     console.log("welcome ram")
// }

// welcome(); //this will work


// welcome();

// var welcome = function() {
//     console.log("priya")
// }


console.log(a)
let a = 10