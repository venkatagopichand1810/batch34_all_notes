// let is the block scope
if(true){
    let count = 10;
    console.log(count)
}
console.log(count)

// redeclaration is not allowed

let a = 10;
let a = 20;
console.log(a)

// reassignment is possible
let city = "vizag";
city = "bangalore";
console.log(city)

function test() {
    if(true){
        let value = 100;
        console.log(value)
    }
    console.log(value)
}

test()


let total = 0;

// { ......... } => block
{
    let total = 50; //this will not be visible outside
    console.log(total); //50
}

console.log(total); //0

{
    let user = "priya"
    console.log(user); //
}

{
    let user = "darshini";
    console.log(user); //
}


// // nested blocks

{
    let x = 10; 
    {
        let x = 20; 
        console.log(x)
    }
    console.log(x)
}


function example(){
    let x  = 1; 
    if(true){
        let x = 2;
        console.log(x); //inside ths if 
    }
    console.log(x); //outside the if
}
example(); //fuction call