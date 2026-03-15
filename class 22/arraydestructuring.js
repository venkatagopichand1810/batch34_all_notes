// array destructuring allows us to extract values from the array 
// and assign them to variables in single line

let mobiles = ["Lg", "oppo", "vivo", "samsung", "apple", "spark"];

//old way
// let one = mobiles[0];
// let two = mobiles[1];
// let three = mobiles[2];
// let four = mobiles[3];

//new way array destructuring way
let[one, , , four] = mobiles;
console.log(one, four)