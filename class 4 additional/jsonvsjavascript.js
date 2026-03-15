
// javascript object

// let person = {
//     name: "venkat",
//     city: "chennai"
// }

//json

//string literals or interpolation or template literals

let personJson = `{"name": "venkat","city": "chennai",
"firstName": "rama",
"lastName": "venkat",
"age": 20,
"city": "bangalore",
"state": "KA","Country": "INDIA"}`;

//we need convert JSON to javascript object..parse method
let obj = JSON.parse(personJson);
console.log(obj)

for(let key in obj) {
    console.log(key, "::", obj[key])
}



let configuration = {
    name: "server",
    url: "198.0.0.1",
    protocol: "https"
}

// to convert the javascript object to json JSON.stringify
let jsonString = JSON.stringify(configuration);
console.log(jsonString)