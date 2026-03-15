

function App() {

  function deleteUser() {
    fetch("https://jsonplaceholder.typicode.com/users/6", {
      method: "DELETE",

    })
      .then(() => {
        console.log(" USER DELETED SUCCESSFULLY")
      })

  }

  return (
    <div>
      <h2>Delete User</h2>

        <button onClick={deleteUser}>Update User</button>
    </div>
  )

}

export default App