// while loop executes a block of code as long as condition is true
//if is going to check the condition first, if its true it will run code.......

// while(condition){
//block of code
// }


// let count = 1;
// while(count <= 5){
//     console.log("number is: ", count); //print
//     count++;
// }


// 1) count = 1; number is: ", 1


// let i = 1;

// while(i<=10){
//     console.log("number is:", i);

//     if(i === 3){
//         console.log("stop this at 3");
//         break; //exit the loop
//     }

//     i++
// }


let atmPin = "1234";
let enteredPin = '';
let attempts = 0;

while (enteredPin !== atmPin) {
    attempts++;
    console.log("Attempt", attempts, ": wrong password")

    if (attempts === 3) {
        enteredPin = "1234"
    }
}

console.log("access granted")
