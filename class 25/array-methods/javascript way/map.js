// map() method is used to create new array based on the given function 
// map will not change the original array

const numbers = [1, 2, 3, 4, 5];

const muliply = numbers.map(function(num) {
    return num * 2
})

console.log(muliply); //new array
console.log(numbers); //original array

// [1, 2, 3, 4, 5].map(function(3)) {
//     return 3 * 2
// }

// [2, 4, 6]