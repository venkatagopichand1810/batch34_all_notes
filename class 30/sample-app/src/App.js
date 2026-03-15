import axios from "axios";
import { useState } from "react";

function App() {

  const [name, setName] = useState(""); // to add the name
  const [users, setUsers] = useState([]);

  // api call using useEffect
  function addUser() {
    
      axios
        .post("https://jsonplaceholder.typicode.com/users", {
          name: name
        })
        .then((response) => {
          // add the new user to the UI List
          setUsers([...users, response.data])
          setName(''); //clear the input field
        })
   
  }

  return (
    <div>
      <h3>POST - USER</h3>

      <input
        value={name}
        placeholder="Enter the name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addUser}>Add</button>

      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  )

}

export default App