import Student from "./Student"


function Teacher() {

    // function as a prop
    function receiveData(message){
        alert(message)
    }


    return (
        <>
         <Student askingStudent = {receiveData} />
        </>
    )
}

export default Teacher


// how to pass the Data
// parent to child Props 

// is it possible to send data from child to parent 

// yes we can able to send the data from the child to parent, we have to send function as a prop