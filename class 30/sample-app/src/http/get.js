import { useEffect, useState } from "react"
function App() {

  // create the state to store the user list
  const[users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) //convert response to the js object
      .then((data) => {
        setUsers(data); //save the users in state 
      })
  }, [])

  return (
    <div>
        <h2>Get the Users list</h2>
        {users.map((user) => (
          <p>
           {user.name} - {user.email}
          </p>
        ))}
    </div>
  )

}

export default App




// useEffect when we are doing api
// useState when there is a change in the data