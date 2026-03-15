import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // state to store the users
  const[users, setUsers] = useState([]);
  // api call using useEffect
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // axios gives the data directly in the response
        setUsers(response.data)
      })
  }, [])

  return (
    <div>
      <h3>Get the user data</h3>

      <ul>
        {users.map((user) => (
          <li>
            {user.name} = {user.email}
          </li>
        ))}
      </ul>
    </div>
  )

}

export default App