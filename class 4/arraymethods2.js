// sort method..going to sort the elements

// let mobliles = ["LG", "OPPO", "vivo", "Apple"];
// console.log(mobliles.sort());


// let values = [90, 1, 20, 10, 2, 100, 30, 3];

// console.log(values.sort())

// // unicode code point order

// // compare function

// console.log(values.sort((a, b) => a - b)); //asc
// console.log(values.sort((a, b) => b - a)); //desc


// reverse...reverse the array order

// let songs = ["song1", "song2", "song3", "song4"];
// console.log(songs);
// songs.reverse();
// console.log(songs)

//join method joins the array into string

// let words = ["Hello", "world", "enter", "the", "javascript"];

// let sentence = words.join(" ***** ");
// console.log(sentence)


// foreach..loop over the elements

let cart = [
    {item: "laptop", price: 20000},
    {item: "mobile", price: 60000}
]


cart.forEach((product) => {
    console.log(product.item + " Price is " + product.price)
})