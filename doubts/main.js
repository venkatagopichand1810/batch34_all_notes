// callback is a function that is passesd as an arugment to another function 

// right now iam doing some task, i will call you back once my task is done


// you order food -> chef prepars the food => after cooking, the waiter calls you -. then you will take the order


// function loginUser(username){
//     alert("User logged in:", username)
// }


// loginUser("venkat")


// callback hell
// function orderBiryani(callback) {
//     console.log("ordered biryani")
//     setTimeout(callback, 3000)
// }

// function prepstarted(callback) {
//     console.log("prep is started")
//     setTimeout(callback, 3000)
// }

// function prepdone(callback) {
//     console.log("prep is done")
//     setTimeout(callback, 3000)
// }

// function packing(callback) {
//     console.log("packing is done")
//     setTimeout(callback, 3000)

// }

// function delivered() {
//     console.log("package is delivered")

// }

// orderBiryani(function () {
//     prepstarted(function () {
//         prepdone(function () {
//             packing(function () {
//                 delivered(function () {
//                     console.log("item is dleived")
//                 })
//             })
//         })
//     })
// })


// promise training


function orderBiryani() {
    return new Promise((resolve, reject) => {
        console.log("ordering biryani")
        setTimeout(() => {
            let success = false; //payment is failed 
            if (success) {
                resolve("biryani ordered")
            } else {
                reject("biryani order failed")
            }
        }, 3000)
    })

}

function prepstarted() {
    return new Promise((resolve) => {
        console.log("prep is started")
        setTimeout(resolve, 3000)
    })
}

function prepdone() {
    return new Promise((resolve) => {
        console.log("prep is done")
        setTimeout(resolve, 3000)
    })
}

function packing() {
    return new Promise((resolve) => {
        console.log("packing is done")
        setTimeout(resolve, 3000)
    })
}

function delivered() {
    console.log("package is delivered")

}

orderBiryani()
    .then((message) => {
        console.log(message)
        return prepstarted()
    })
    .then(prepdone)
    .then(packing)
    .then(delivered)
    .catch((error) => {
        console.log("error occureed", error)
    })

