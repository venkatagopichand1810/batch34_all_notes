// spread operator (...)

//spread operator is used to expand the elments into 
// individual values 

// helps us to 
// 1) to copy the data
//2) to merge the data
//3) to write clean and short code 

// copy an array
let numbers = [1, 2, 3, 4, 5]; //original array

//old way
// create the new array manually
let copyNumbers = [];
copyNumbers[0] = numbers[0];
copyNumbers[1] = numbers[1];
console.log(copyNumbers);

//new way
let copyNumbers = [...numbers];
console.log(copyNumbers)

// merge two arrays
let frontend = ["HTML", "CSS"];
let backend = ["Node", "Mongodb"];

let fullStack = frontend.concat(backend); //old way
let fullStack1 = [...frontend, ...backend]; //new way
console.log(fullStack)
console.log(fullStack1)


// add the new item to the cart

let cart = ["shoes", "belt"]; //original array
cart.push("bag"); //old way
console.log(cart) ; //consoling the original array, original array getting modified

let cart1 = ["shoes", "belt"]; //original array
// create the new cart without changing original
let newCart = [...cart1, "bag"]

console.log(cart1);
console.log(newCart)

let cart2 = ["shoes", "belt"]; 
// unshift method adds the item to the start and it will change the origianl array
// cart.unshift("coffee powder");
let updatedCart = ["Coffee powder", ...cart2]
console.log(cart2);
console.log(updatedCart)
