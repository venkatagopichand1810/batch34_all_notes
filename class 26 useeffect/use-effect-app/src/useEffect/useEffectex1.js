import { useEffect, useState } from "react";


function App() {
  const [count, setCount] = useState(100);
  const [age, setAge] = useState(18)

  // this will render everytime
  // useEffect(() => {
  //   console.log("I am here")
  // })

  // useEffect(() => {
  //   console.log("I am here")
  // }, []); // passing empty dependency 


  useEffect(() => {
    console.log(count)
  }, [count])

  useEffect(() => {
    console.log(age)
  }, [age])


  return (
    <>
      Count value: {count}
      Age is: {age}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setAge(age + 1)}>Age</button>
    </>
  )

}

export default App