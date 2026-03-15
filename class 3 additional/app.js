
// const marks = [80, 75, 90, 100, 67];
// let totalmarks = 0;

// for (let i = 0; i < marks.length; i++) {
//     totalmarks = totalmarks + marks[i]

// }

// console.log("Total marks", totalmarks)


const cart = [5000, 9000, 87741, 100, 67];
let totalCartValue = 0;

for (let i = 0; i < cart.length; i++) {
    totalCartValue = totalCartValue + cart[i]

}

console.log("Total marks", totalCartValue)


//attendance system

const students = ["ram", "akhila", "shivani", "yokesh", "venkat"];
const present = [true, false, true, true, false];

for (let i = 0; i < students.length; i++) {
    if (present[i]) {
        console.log(students[i], "is present")
    } else {
        console.log(students[i], "is absent")
    }
}


const marks = [55, 60, 30, 70, 85, 40];

const passing = 36;

for(let i =0; i<marks.length; i++){
    if(marks[i] >= passing) {
        console.log("Student", i + 1, ": pass")
    } else {
          console.log("Student", i + 1, ": Fail")
    }
}






// student 1: pass
// student 2: fail


// restartunet order summary... chicken briay: 2, fries: 2, burger: 5..total items ordered: 9


const order = {
    biryani: 2,
    fries: 2, 
    burger: 5
}