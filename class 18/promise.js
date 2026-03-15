// promise is the object in the Javascript that contains 3 states

// 1) pending State 
// 2) resovled state(fulfilled)
// 3) rejected

// creating the promise
let giveMePromise = new Promise(function(resolve, reject) {
    
    let goMovie = false; 

    if(goMovie){
        resolve("going to movie")
    } else {
        reject("not going to movie")
    }
})

// using the promise
giveMePromise
    .then(function(result){ //.then will be always the resolve state
        console.log(result)
    })
    .catch(function(error){
        console.log(error)
    })