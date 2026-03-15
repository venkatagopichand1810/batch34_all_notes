

// ex: 1

for (let number = 1; number <= 5; number++) {
    console.log("Number: ", number)
}

// ex: 2

// console.log("decrementing")

for (let number = 5; number > 0; number--) {
    console.log("Number: ", number)
}

//ex 3
// 0, 2, 4, 6, 8, 10
for (let i = 0; i <= 10; i += 2) {
    console.log("even number:", i)
}



//ex: 5
const mobiles = ["lg", "oppo", "vivo"];
console.log(mobiles[0])

for (let i = 0; i < mobiles.length; i++) {
    console.log("Mobile name is:", mobiles[i])
}

//ex:6
for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        continue;
    }
    if (i === 5) {
        break
    }
    console.log("number is:", i)
}


