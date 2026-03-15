

function App(){

    const marks = [45, 65, 75, 34];

    marks.forEach(mark => {
        if(mark > 45){
            console.log(mark, "passed")
        } else {
            console.log(mark, "fail")
        }
    })

    return (
        <div>
            <h3>Student Result</h3>
        </div>
    )

}

export default App