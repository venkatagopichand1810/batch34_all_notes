// do..while

//do...while executes the block of code atleast once before checking the condition


// let count = 6;
// while(6 <= 5){
//     console.log("number is: ", count); //print
//     count++;
// }
// console.log("while ended")

// let count = 1;

// do {
//     console.log("venkat");
//     console.log("number:", count);
//     count++

// }while (count <=5)

let round = 0;
let playagain;

do {
    round++;
    console.log("Played round", round);

    // stop the game after 3 rounds
    playagain = (round < 3) ? "yes" : "no"
} while (playagain === "yes")
console.log("Game over")