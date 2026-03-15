
// var a = "100";
// var price = 100.74
// console.log(a);
// console.log(typeof a)
// console.log(typeof price)

// let name = "venkat";
// console.log(typeof name)


// let isStudent = false;
// let isMentor = true
// console.log(typeof isStudent);
// console.log(typeof isMentor)

// let x;
// console.log(typeof x)


// let address = null;
// console.log(typeof address)



// let itemPrice = 1500;
// let tax = 0.18;
// let totalPrice = itemPrice + (itemPrice * tax);
// console.log(totalPrice)

// let username = "venkat";
// let welcome = `welcome ${username}`;
// console.log(welcome)


// non primitive data(reference) data types

//object..key value pair

// let mobile = {
//     name: "iphone",  //key : value
//     price: 76000,
//     modal: "iphone 13"
// }

// console.log(mobile.name)
// console.log(mobile.price);
// console.log(mobile.modal)


// let city = {
//     state: "chennai",
//     country: "india",
//     address: "T nagar"
// }
// console.log(city.country)


//array..collection of values

// let mobiles = ["LG", "oppo", "iphone"]


//function data type

// function greet(){
//     console.log("hello welcome")
// }

// greet()

//Date date type

// let today = new Date();
// console.log(today.getFullYear())



//copy by value(primitive types)

// let a = 20; //a holds 20
// let b = a;  //b the getting copy of a

// b = 30; //changeing b does not affect a
// console.log(a); //20
// console.log(b); //30


// let player = "dhoni"; //original
// let captain = player; //copy

// captain = "suresh raina";
// console.log(player); //dhoni
// console.log(captain) // "suresh raina";


// let price = 100; //original price
// let dicounted = price; //copy of price

// dicounted = 80; //applying the discount price to the copy

// console.log("original price", price)


// let maxAttempts = 3;
// let userAttempts = maxAttempts;
// userAttempts = userAttempts-1;
// console.log(maxAttempts);
// console.log(userAttempts)




// copy by refernce, mutable..it will share the same memory location
//non-primitive data types

// const arr1 = [1, 2, 3, 4, 5]; //orignal array
// let arr2 = arr1; //arr2 point to the same array (not a copy)

// arr2.push(100); //moddify the arr2

// console.log(arr1); //1 2 3 4 5 100
// console.log(arr2); //1 2 3 4 5 100



// let user1 = {
//     name: "venkat"
// }

// let user2 = user1;

// user2.name = "ram";
// console.log(user1.name);
// console.log(user2.name)





//non-primtive data types are mutable, if i change the copy it will effec both copy and original



let original = {
    name: "yokesh",
    address: {
        city: "hyd",
        zip: 522441
    }
}

// shallow copy
let shallow = {...original}

shallow.name = "venkat";
shallow.address.city = "bangalore"
console.log(original.name); //yokesh
console.log(original.address.city); //bangalore



//primitive data types are fixed memory, it will only single value...immutable we cant change