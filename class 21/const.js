const a; //Missing initializer in const declaration
console.log(a)

// specifically in case of const, we must have the value at the same line of declaration

const a = 100;
console.log(a)

//const is the block scoped, only accessible inside the block 
{
    const a = 10; 
    console.log(a)
}
console.log(a)

// const cannot be reassigned

const a = 100; 
a = 200; 
console.log(a)

// // const cannot be redeclared in the same scope 
const city = "vizag";
const city = "bangalore";

const user = {name: "venkat"};

// const user = {name: "rama"};

// we cant change it, but we can modify
user.name = "rama"
console.log(user);


const values = [1, 2, 3, 4, 5, 6];
// const values = [1, 2, 3, 4, 5, 6, 7];
values.push(7);
console.log(values)

const value = 100;

{
    const value = 200; 
    console.log(value); //200
}

console.log(value); //100