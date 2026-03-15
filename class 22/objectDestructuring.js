// object
// const mobile = {
//     name: "Apple",
//     price: 76000, 
//     model: "iphone 13",
//     year: 2024
// }

// old way
// const name = mobile.name; 
// const price = mobile.price; 
// const model = mobile.model; 
// const year = mobile.year;

// allows us to extract muliple properties from the object in a single line

// object destructuring way
// const {name, price, model, year} = mobile

// console.log(name, price, model, year);


const user = {
    name: "venkat",
    address: {
        city: "bangalore",
        zip: "660036",
        location: {
            state: "KA",
            country: "India"
        }
    },
    more: {
        street: "KR puram"
    }
}
// const name = user.name
// const city = user.address.city;
// const zip = user.address.zip;
// const country = user.address.location.country;

const{name, address:{city, zip, location: {state, country}}, more: {street}} = user
console.log(name, city, zip, state, country, street)



