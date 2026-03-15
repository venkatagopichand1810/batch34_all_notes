// url module we are going to use when we work with url, create the url, modify the url etc


const url = require("url");

const myURL = "https://www.flipkart.com/flipkart-offers-electronics-bau-at-store?param3=&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkVsZWN0cm9uaWNzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&ov_redirect=true&pageUID=1772262044676"

// break the url into parts we can use the parse method

const parsedURL = url.parse(myURL);
console.log(parsedURL)

const redBusURL = "https://www.redbus.in/bus-tickets/bangalore-to-chennai?fromCityName=Bangalore&fromCityId=122&srcCountry=India&fromCityType=CITY&toCityName=Chennai&toCityId=123&destCountry=India&toCityType=CITY"

const parsedRedBusURL = url.parse(redBusURL, true);

console.log(parsedRedBusURL.query.fromCityName)
console.log(parsedRedBusURL.query.srcCountry)
console.log(parsedRedBusURL.query.fromCityId)


// form the url


const url1 = require("url");
const obj = {
    protocol: "https",
    hostname: "guvihcl.com",
    pathname: "/courses",
    query: {category: "mernstack"}
}

const formattedURL = url1.format(obj);
console.log(formattedURL)