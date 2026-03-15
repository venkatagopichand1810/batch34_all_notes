
    
    // var N = userInput[0].split(""); ;; 
    // var n = [1, 2, 3, 4]
    // var num = N.sort();
    // var odd = "";
    // var check = 0;
    
    // for(var i =0; i<num.length; i++) {
    //     if(num[i] % 2 !== 0){
    //         odd = ""1 + " " + 3 + " ";
    //         check = 1
    //     }
    // }
    
    // if(check === 0){
    //     console.log("-1")
    // } else {
    //     console.log(odd.trim())
    // }

var n ="248";
  var message = ''
  for(let i=0; i<n.length; i++){
      if(n[i]%2==1){
          message+=(n[i]) + " "
      }
  }
  if (message == ''){
      message = '-1'
  }
  console.log(message)
    
