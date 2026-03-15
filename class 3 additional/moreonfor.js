// for....in

// loop over the keys of an object

const mobile = {
    name: "iphone",  //key: value
    price: 75000,
    inStock: true,

}
//loop over the keys
for(let key in mobile ) {
    console.log(key, ":", mobile[key])
}

const attendance = {
    Ram: "Present",
    Venkat: "Absent",
    john: "present"
}

for(let student in attendance) {
    console.log(student, ":", attendance[student])
}








