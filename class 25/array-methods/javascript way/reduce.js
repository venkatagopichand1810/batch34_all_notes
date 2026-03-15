// reduce method is used to reduce the array and it will give single value

let price = [1000, 999, 1500];

const total = price.reduce((acc, curr) => acc + curr, 0);

console.log(total)


// price.reduce((acc, curr) => acc + curr, 0);

// 1) 0, 1000 = 0 + 1000 = 1000
// 2) 1000 + 999 = 1999
// 3)  1999 + 1500 = 