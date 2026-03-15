
// // old array is untouched 
// // new array will be created 

// let cart = ["mobiles", "phones"];

// // push 
// cart.push("bag");

// newcart = [...cart, "bag"]
// console.log(cart);
// console.log(newcart)

// //cart ->[""]..same array is getting changed 


// let profile = {
//     name: "venkat",
//     city: "hyderabad"
// }
// // profile.city = "bangalore";

// changedFirsttime = {
//     ...profile, 
//     city: "bangalore"
// }

// changedScondtime = {
//     ...profile, 
//     city: "vizag"
// }
// console.log("original state", profile);
// console.log("updated state 1", changedFirsttime)
// console.log("updated state 2", changedScondtime)


// // aadahar, they only two times you need update the city in your entire year



// let arr = [10, 20, 30, 40, 50];

// let[first, middle, ...last] = arr;
// console.log(first, middle, last)



// function combineCart(...items){

//     let result = [];

//     for(let item of items) {
//         result.push(...item); //spreac each cart array
//     }
//     return result
// }



// let cartItems = ["shoes", "tv"];
// let wishItems = ["ac", "washing machine"];
// let offerItems = ["iphone17", "vivo 12 pro"];

// let finalCart = combineCart(cartItems, wishItems, offerItems);
//  console.log(finalCart)



let cartItems = ["shoes", "tv"];
let wishItems = ["ac", "washing machine"];
// let offerItems = ["iphone17", "vivo 12 pro"];

let combine = [...cartItems, ...wishItems];
// console.log(combine)

const[one, ...reamingEle] = wishItems;
console.log(one, reamingEle)
