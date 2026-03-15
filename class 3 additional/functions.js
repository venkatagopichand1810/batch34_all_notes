// function is the reusable block of code that peforms a specific task. 
// intead of writing the same code muliple times, we can just reuse the function


// 1) Function Declaration (named function)

// function hi(name){ //function defintion 

//     return name;
// }

// console.log(hi("venkat")); //function calling
// console.log(hi("ram")); 
// console.log(hi("john"));
// console.log(hi("pradeep"));
// console.log(hi("akhila"));


// function add(a, b) {
//     return a + b
// }

// function sub(a, b) {
//     return a - b
// }


// console.log(add(10, 50));
// console.log(add(50, 60));
// console.log(add(90, 60));

// console.log(sub(50, 40))
// console.log(sub(90, 40))


// function greetUser(name, time) {

//     if(time < 12){
//          return "Good Morning " + name
//     } else if(time < 18) {
//         return "Good Afternoon " + name
//     } else {
//          return "Good Evening " + name
//     }


// }

// console.log(greetUser("venkat ", 12))

// console.log(greetUser("ram ", 6))


//return will sends the value back to the function call


function checkLogin(username, password) {
    if(username === "admin" && password === "1234") {
        return "Login Successfull"
    } else {
        return "Invalid credentials"
    }
}


console.log(checkLogin("admin", "1238"));