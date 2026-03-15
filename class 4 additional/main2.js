// // const arry  = 1 2;

// // // const first = arry[0];
// // // const second = arry[1];
// // // const third = arry[2];
// // // const fourth = arry[3];

// // const[first, second, third, fourth] = arry


// // console.log(first, second, third, fourth)

// var arr = [1,2,3,4,5]

// var [a,b,c,d,e] = arr[0].split('');


//start-here
  //Your code goes here … replace the below line with your code logic 
  number = userInput[0]
  square_root = number**0.5
  
  for(let i=2; i<=square_root; i++){
    if(i==number){
        continue
    }
    message = number%i==0 ? "no" : "yes"
  }
  console.log(message)



