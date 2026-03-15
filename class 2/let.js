

// declaration and assignement

// let name = "venkat";
// console.log(name);


//re-assignemnt is possible in case of let
// let age; 
// age = 20;
// console.log(age)

//re-declaration is not possible
// let value = 100;
// console.log(value)
// let value = 200;
// console.log(value)
//100 lines of code, if there is one error


//let is the block, that will accessible only inside to that block and we can't access outside the block
// if(true){
//     let name = "venkat";
//     console.log(name);
// }
// console.log(name); //error




// let value = 100; //global scope
// // let value = 200;

// if(true){
//     let value = 200; // block scope
//     console.log(value); //200
// }

// console.log(value); //100



//var is funcition scope, not the block scope..it can be accessible outside the block
//re-declaration is possible


//let is block scope, value inside the block will not accessible outside of the block
//re-declaration is not possible


let a = "global";

{
    let a = "block 1";
    {
        let a = "block 2"
        console.log(a); //block 2
    }
    console.log(a); //block 1
}
console.log(a); //global