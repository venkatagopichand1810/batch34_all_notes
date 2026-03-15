// object in javascript
// create an object

let person = {
    name: "Ram",
    firstName: "rama",
    lastName: "venkat",
    age: 20,
    city: "bangalore",
    state: "KA",
    Country: "INDIA",
    fullDetails: function() {
       return "full details of the person" 
    },
    fullName: function() {
        return this.firstName + " " + this.lastName
    },

    address: {
        street: {
            area: "1st cross silk board",
            zipcode: 560036
        }
    },
    hobbies: ["Reading", "watching cricket", "social service"]
}

console.log(person.fullName())
console.log(person.hobbies)
console.log("city is", person.city);
console.log(person.fullDetails());
// acessing nested object
console.log(person.address.street.zipcode)
