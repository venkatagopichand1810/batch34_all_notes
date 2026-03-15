// swtich case...when we wanted to compare a single value with muliples cases


// let signal = "yellow";

// if(signal === "green"){
//     console.log("GOOOOOOOOOOOOOO")
// } else if(signal === "yellow"){
//     console.log("go slow")
// } else if(signal === "blue"){
//     console.log("amubalnce is going on wait please")
// } else {
//     console.log("stop and wait")
// }

let signal = "yellow";
switch(signal){
    case "red":
        console.log("stop and wait");
        break;
    case "green":
        console.log("GOOOOOOOOOOOOOO");
        break;
    case "yellow":
        console.log("go slow");
        break;

    case "blue":
        console.log("amubalnce is going on wait please");
        break;

    default:
        console.log("invalid signal")
}


let marks = 75;

switch(marks) {
    case 100:
        console.log("pefect score");
        break;
    case 75: 
        console.log("good score");
        break;
    case 50:
        console.log("Pass")
        break
    default:
        console.log("Result not yet came")
}