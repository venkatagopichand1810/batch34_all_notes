

   var str = userInput[0]; //user input
    var n = str.length; //find the length of the string
    var res = ""; //to store the final result


if(n % 2 === 1){ //if the length is odd
    var mid = Math.floor(n/2); //middle index value
    res = str.slice(0, mid) + "*" + str.slice(mid + 1); //keep the char beofe the middle + * + keep the char after the middle

} else {
    
}



//hello = 5

//  var mid = Math.floor(5/2); ...2 

//hello... h = 0, e = 1, l = 2 , l =3, o = 4

str.slice(0, 2) + "*" + str.slice(3);