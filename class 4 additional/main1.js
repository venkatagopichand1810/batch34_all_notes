let mobile = {
    name: "iphone",
    price: 76000,
    model: "iphone15",
    inStock: true
}

// console.log(mobile.name)
// console.log(mobile.price);

// ex: 1
for(let key in mobile) {
    console.log(key, ":", mobile[key])
}

//ex:2 it will return array of keys
Object.keys(mobile).forEach(key => {
      console.log(key, ":", mobile[key])
})

//ex: 3 Object.values()..returns only the array of values

Object.values(mobile).forEach(value => {
    console.log(value)
})

//ex: 4 retuns an array of [key, value] pairs

Object.entries(mobile).forEach(([key, value]) => {
    console.log(key + "==>" + value)
})