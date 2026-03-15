
function App() {
    const numbers = [10, 20, 30, 40, 50];

    const filteredNumbers = numbers.filter(num => num > 20);

    const students = [
        {id: 1, name: "venkat", marks: 95},
        {id: 2, name: "rama", marks: 65},
        {id: 3, name: "shyam", marks: 35}
    ]

    // fitler the passed students
    const passedStudents = students.filter(student => student.marks > 36)

    return (
        <div>
            {filteredNumbers.map((num) => (
                <p>{num}</p>
            ))}

        <h1>Passed Students</h1>
        {passedStudents.map(student => (
            <p>
                {student.name} - {student.marks}
            </p>
        ))}
        </div>
        
    )

}

export default App