
// let students = ['ram', "shiva", 'venkat', "balaji"];
// if(students.length > 3) {
//     console.log("Max length for the game to play is 3")
// }

// map method used to create the new array by applying the given function 

// let prices = [100, 200, 300, 400];
// console.log(prices);
// let newPrices = prices.map(price => price * 2);
// console.log(newPrices)


// splice, slice

// splice...method add, remove and replaces the elements in the array

// array.splice(start, deletcount, item1, item2, item3)

//start => starting index
//deleteCount => how many elementt need to delete
//item1...how many element we need to add


// let mobiles = ["lg", "oppo", "vivo", "iphone"];
// // mobiles.splice(1, 2);
// mobiles.splice(1, 2, "samsung", "BPL", "venkat", "more");
// console.log(mobiles);



// slice...
//array.slice(start, end)
//slice method will not modify the original array

//slice...starting index will inclusive included
//ending index will be excluded exclusive

let students = ["priya", "pradeep", "yuvan", "yokesh", "venkat", "shiva"];
let topStudents = students.slice(0, 5);
console.log(topStudents)


