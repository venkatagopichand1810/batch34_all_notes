// Callback is a function passed as an arugment to another function
//we are going to pass one function to another function - callback

//main function 
function calculate(a, b, venkat) {
    venkat(a, b)
}

function add(a, b) {
    console.log("Add", a + b)
}

function sub(a, b) {
    console.log("Sub", a - b)
}

function division(a, b) {
    console.log("div", a / b)
}


calculate(10, 30, add)
calculate(10, 30, sub)
calculate(10, 30, division)