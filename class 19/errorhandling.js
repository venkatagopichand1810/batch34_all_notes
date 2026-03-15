try {
    let age = -28;
    if(age < 18){
        throw "Age cannot be less than 18"
    }
    console.log("age is valid")
} catch(err){
    console.log(err)
}


