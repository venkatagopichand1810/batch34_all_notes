import { useState, useMemo } from "react"
function App() {
  const [count, setCount] = useState(0);
  const total = useMemo(() => {

    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum += i
    }
    return sum
  }, [])

console.log("component rendered")

  return (
    <div>
      <h2>Total: {total} </h2>
      <button onClick={() => setCount(count + 1)}>
        Re-render({count})
      </button>
    </div>
  )
}

export default App


//usememo hook is used to increase the performance, it will unnecessary cal of the expensinve funcitons 