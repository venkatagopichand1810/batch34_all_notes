
function App() {
  const numbers = [10, 20, 30, 40, 50];

const cities = ["Hyd", "bangalore", "chennai", "Tamilnadu"];

  const students = [
    { hallticket: 1, name: "Venkat", marks: 943 },
    { hallticket: 2, name: "ram", marks: 743 },
    { hallticket: 3, name: "naresh", marks: 643 },
  ]

  return (
    <>
      {numbers.map((num) => (
        <p>{num * 10}</p>
      ))}

      <h1>Cities</h1>
      {cities.map((city) => (
        <li>{city}</li>
      ))}

      <h2>Student Data</h2>
      {students.map(student => (
        <div>
          <p>{student.name} with hall ticket number 
            {student.hallticket} got {student.marks} marks </p>
        </div>
      ))}


    </>
  )

}

export default App


// { } curly for binding purpose..data binding or interpolation

// string literrls ${}