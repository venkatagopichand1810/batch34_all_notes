// how to post the data ..POST

import { useState } from "react"
function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("")

  function handleSubmit(e) {
    e.preventDefault(); //it will the stop page refresh when we submit the form

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
      .then((response) => response.json()) //convert response to the js object
      .then((data) => {
        console.log("created the user", data)
      })

  }

  return (
    <div>
      <h2>Post user data</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter the Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Add USer</button>
      </form>

    </div>
  )

}

export default App




// useEffect when we are doing api
// useState when there is a change in the data