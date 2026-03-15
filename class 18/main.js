//ex: 1
console.log("A")
console.log("B")
console.log("C")

//this process is taking 20mins
for(let i = 1; i<=1000000; i++){
    console.log("loop", i)
}

console.log("D")
console.log("E")

// ex: 2
console.log("A")
console.log("B")
console.log("C")

//this process is taking 20mins
for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
        console.log("loop", i)
    }, 9000); //1000ms = 1second
}

console.log("D")
console.log("E")



//ex:3
console.log("A")

setTimeout(() => {
    console.log("Venkat")
}, 1000)

setTimeout(() => {
    console.log("Venkat 2")
}, 500)

setTimeout(() => {
    console.log("Venkat 4")
}, 2000)

setTimeout(() => {
    console.log("Venkat 3")
}, 100); //100 delay

console.log("B")


// 1000 milliseconds = 1second
// 500 ms = 0.5s
// 100 = 0.1s

// setTimeout is the javascript asychronous fucntion that allows to make the javascript asyc..
//we can run the code in the non-blocking way.
