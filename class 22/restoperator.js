
// rest operator(...) allows us to collect muliple elments into single array

// i wanted to sum of the elements

// function add(a, b, c, d, e, f, g) {
//     return a + b + c + d + e + f + g
// }

// console.log(add(10, 20, 30, 60, 70, 80, 90, 100))

function add(...numbers) {
    let total = 0; 
    for(let num of numbers) {
        total += num
    }
    return total

}

console.log(add(1, 2, 3, 4))
console.log(add(1, 2, 3, 4, 50, 100, 1000, 101, 5000))
// indefinite number of values, then we have to use rest


let array = [34, 60, 70, 90, 100];
let [failmark, passMark, ...remainigValues] = array;
console.log("fail", failmark, "pass", passMark, remainigValues);


let user = {
    name: "venkat",
    city: "vizag",
    pin: 523155,
    country: "india",
    role: "mentor"
};

let {name, city, ...otherDetails} = user;

console.log(name ,city, otherDetails)


