// var is not the block scope, we can able to access outside the block
if(true){
    var name = "venkat"
};
console.log(name)

// var inside the function (function scope)

function welcome() {
    var count = 10;
    console.log(count)
}
welcome(); // 10

console.log(count)


if(true){
    let name = "pradeep";
    console.log(name)
}
console.log(name)


// var : redeclaration is possible
var city = "bangalore";
var city = "mysore";

console.log(city); //mysore

// hoisting with var
// by...var declarations will be moved to top of the file

console.log(a)
var a = 10;

//behind the screens
var a;
console.log(a)
a = 10;


for(var i = 0; i< 3; i++){
    console.log("inside", i); //2  //var i = 2
}
  console.log("outside", i)


var status = "Active"; //global state

function update(){
    status = "Inactive"; //reassign 
}

update(); //calling the update
console.log(status)


// var a = 10; 
// var a = 20; 
// var a = 30; 
// console.log(a)

// if(true){
//     if(true){
//         var msg = "hello"
//     }
// }
// console.log(msg)

if (true) {
    if (true) {
        var msg = "hello"
    }
}

console.log(msg)

//var is not a block scope, we can able to access outside the block
// let is block scope, we cant able to access outside the block