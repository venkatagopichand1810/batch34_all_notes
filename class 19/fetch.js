
//get call
fetch("https://jsonplaceholder.typicode.com/posts") //#1
    // 2) convert readable stream to JSON
    .then(response => {
        return response.json()
    })

    // we have use .then to get the actual json data
    .then(data => {
        console.log("Result", data)
    })

    // error if we have any error
    .catch(error => {
        console.log("something is not working")
    })

//fetjoc