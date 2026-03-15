

function addNumbers(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000)
    })
}

// addNumbers(10, 40)
//     .then((sum) => {
//         console.log("sum is", sum)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// async function showSum() {
//     const sum = await addNumbers(10, 40);
//     console.log("sum is", sum)
// }

// showSum()

async function showResult() {
    const sum = await addNumbers(10, 10);
    console.log("sum is", sum)
}

showResult()