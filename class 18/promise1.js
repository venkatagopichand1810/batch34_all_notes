
// creating the promise
let pizzaPromise = new Promise(function(resolve, reject)  {

    let pizzReady = false;

    if(pizzReady){
        resolve("pizza is delivered")
    } else {
        reject("pizza is over")
    }
})

// using the promise to find the final output
pizzaPromise
    .then(function(vnekat) {
        console.log(vnekat)
    })
    .catch(function(error) {
        console.log(error)
    })