let formData = {
    name: "Venkat"
};

let addNewData = {
   ...formData,
   name: "ram",
   email: "venkat@gmail.com",
   address: "bangalore" 
}

console.log(formData);
console.log(addNewData);
