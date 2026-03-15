function allinone() {
    // var is function scope
    if(true){
        var name = "venkat"
    }
    console.log(name); //venkat

    // let
    if(true){
        let role = "mentor";
        console.log("role", role); //mentor
    }
    // accessing let
    // console.log("outside", role); //undefined
    // const
    if(true){
        const stack = "MERN Stack";
        console.log(stack); //mern stack
    }
    // //accessing const
    // console.log(stack); //undefined

// accessing var
  console.log(name); //venkat
}

allinone()



// var:
// redeclaration is possible 
// reassignment is possible 

// let:
// redeclaration is not possible
// reassignment is possible 

// const:
// redeclaration is not possible
// reassignment is not possible

// assignment + declaration in 1 line