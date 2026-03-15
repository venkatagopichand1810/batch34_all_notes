// const products = ["mobiles", "laptop", "mouse", "keyboard"];

// access first product using index 
// const featuedProduct = products[0]; //old way
// const [featuedProduct] = products; //new way
// console.log(featuedProduct)

// // Featured product + remaining products

// //normal way
// const featuedProduct = products[0];
// const laptopProducts = products.slice(1);
// console.log(featuedProduct, "**laptop products", laptopProducts)

// // new way with rest operator
// const[featuedProduct, ...laptopProducts] = products;
// console.log(featuedProduct, laptopProducts)


// spread operator(...) used to spread the elements into muliple elements
// rest operator(...) allows to collect muliple values into single array

const cart = ["mobiles", "laptop", "mouse", "keyboard"];

// get first two items 

// old way
// const item1 = cart[0];
// const item2 = cart[1];
// console.log(item1, item2)

//new way
// const[item1, item2] = cart;
// console.log(item1, item2)

// remove the first item after checkout

//const remainingCart = cart.slice(1); //old way
const[, ...remainingCart] = cart; //new way
console.log(remainingCart)


const productDetails = ["laptop", ["Dell", "10% festival offer"]];

// normal way
// const productName = productDetails[0];
// const productCompany = productDetails[1][0];
// const productOffer = productDetails[1][1];

//new way
const[productName, [productCompany, productOffer]] = productDetails
console.log(productName, productCompany, productOffer)


// spread is used to spread elements
// rest is used to combine multiple elements into single 