// promise.all

// waits for all promises to resolve
// if any promise rejects, the whole promise will reject immediately

// const promise1 = Promise.resolve("order is ready")


const promise1 = new Promise ((resolve, reject) => {
    resolve("Order is ready")
})

const promise2 = Promise.reject("order is not packed")

const promise3 = Promise.resolve("order is delivered")

Promise.all([promise1, promise2, promise3])
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })


// ------------------------------



// promise.race
//returns the first promise that rejected or resolved

const promise4= new Promise ( resolve => 
    setTimeout(() => resolve("Order is ready"), 2000))


const promise5= new Promise ( resolve => 
    setTimeout(() => resolve("Order is not ready"), 1000))


const promise6= new Promise ( resolve => 
    setTimeout(() => resolve("Order is picked"), 100))

Promise.race([promise4, promise5, promise6])
    .then(result => console.log(result))



// promise.allSettled

// waits for all the promises to settle, resolve or reject and it will give array of promises of resolve and reject

const promise7 = new Promise ((resolve, reject) => {
    resolve("Order is ready")
})

const promise8 = Promise.reject("order is not packed")

const promise9 = Promise.resolve("order is delivered")

Promise.allSettled([promise7, promise8, promise9])
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })


// promise.any
// returns the first fulfilled promise, and it will ignore the rejected promise


const promise7 = new Promise ((resolve, reject) => {
    reject("Order is ready")
})

const promise8 = Promise.reject("order is not packed")

const promise9 = Promise.resolve("order is delivered")

Promise.any([promise7, promise8, promise9])
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })
