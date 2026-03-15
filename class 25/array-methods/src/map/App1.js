function App() {

  const todos = [
    { id: 1, task: "React Learning", done: false },
    { id: 2, task: "HTML learning", done: true },
    { id: 3, task: "Node js learing", done: false },
    { id: 4, task: "Javascript learning", done: true },
  ]

  return (
    <>
      <h1>Todo List</h1>
      {todos.map(todo => (
        <p>
          {todo.task} -- {todo.done ? "Completed" : "Pending"}
        </p>
      ))}

      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {todos.map(todo => (
            <tr>
              <td>{todo.id}</td>
              <td>{todo.task}</td>
              <td>{todo.done ? "Completed" : "Pending"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
export default App


// output:

// React Learning - Pending
// HTML learning - Completed