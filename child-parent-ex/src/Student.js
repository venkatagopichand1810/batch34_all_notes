

function Student({askingStudent}) {

    function sendUpdateToTeacher() {
        askingStudent("hello teacher assignment is completed")
    }


    return (
        <>
            <button onClick={sendUpdateToTeacher}>Submit Assingnment</button>
        </>
    )

}

export default Student