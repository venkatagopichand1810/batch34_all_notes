

function outerfun(){
    let name = "venkat";

    function inner(){
        console.log(name)
    }

    return inner
}

const something = outerfun();
something()