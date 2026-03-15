// scope: current context of exectution, where our var and functions can accessed


// global scope:.. variables declared outside of the function or block.. global scope....this scope
//can access anywhere in the program


// let name = "venkat"; //global

// function greet() {
//     console.log(name); //venkat
// }
// console.log(name); //venkat
// greet();
// console.log(name); //venkat


// 2. function scope..variables declared inside the function are scoped inside the function, they cannot access outside

// function welcome() {
//     const name = "ram";
//     console.log(name)
// }
// console.log(name)
// welcome();


// 3. block scope (let and const) {}...variables declared with let or const inside { } cannot access outside of the block

// if(true){
//     var name = "ram";
//     let name1 = "venkat";
//     const name2 = "john"
// }
// console.log(name)
// console.log(name1);
// console.log(name2)


// 4. Lexcial scopez(closure scope)..inner functions can access varibales from the parent or outer function

// function welcome() {
//     let value = 100;

//     function inside() {
//         console.log(value)
//     }
    
//     inside()
// }
// welcome()

// implict/explict scope

//if we assign a variable without var, let and const(global implict scope) can access anywhere


// function hi() {
//      a = 10;
// }
// hi();
// console.log(a)


// if(true){
//     const name = "ram";
// }
// console.log(name)


// function something() {
//     let a = 10;
//     console.log(a);
//     if(true){
//         console.log(a)
//     }
// }
// something();


// if(true){
//     let a = 10
// }