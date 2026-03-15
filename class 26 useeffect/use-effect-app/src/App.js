import { useState, useEffect } from "react"


function App() {
  const [users, setUsers] = useState([]); //state to store the API data

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json()) //convert response to JSON
      .then((data) => setUsers(data))
  })

  return (
    <div>
      <h3> User lists</h3>

      {/* render the data in the jsx */}

      {users.map((user) => (
        <>
          <p>{user.username}</p>
          <span>{user.email}</span>
        </>

      ))}

    </div>
  )

}

export default App