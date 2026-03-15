// reduce method will give single value


// array.reduce((accumulator, currentvalue), {}, initialvalue)

// accumulator => stores the result of each iteration, at staring it will take the intitial value
// currentvalue -> current element of the array 
// initialvalue -> starting value for accumulator



let marks = [1, 2, 3, 4, 5];

let total = marks.reduce((acc, curr) => acc + curr, 10);

console.log(total)

// 1) (0, 1) => 0 + 1 = 1
// 2) (1, 2) => 1 + 2 = 3
// 3) (3, 3) => 3 + 3 = 6
// 4)(6 + 4) => 6 + 4 = 10
// 5) (10 + 5 ) => 10 + 5 = 15


