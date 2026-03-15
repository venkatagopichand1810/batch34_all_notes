import { useState, useCallback } from "react";

import Title from "./components/Title";
import Age from "./components/Age";
import AgeBtn from "./components/AgeBtn";
import Count from "./components/Count";
import CountBtn from "./components/CountBtn";

function App() {
  // the value are changing....usestate
  let [count, setCount] = useState(0); //state for the count 
  let [age, setAge] = useState(18);

  // to change the count
  const handleCount = useCallback(() => {
    setCount(count + 1)
  }, [count])

  //to change the age

  const handleAge = useCallback(() => {
    setAge(age + 1)
  }, [age])

  return (
    <>
      <Title />
      <Count count = {count}/>
      <CountBtn handleCount = {handleCount}/>
      <Age age = {age}/>
      <AgeBtn handleAge = {handleAge}/>
    </>
  )

}


export default App


//usecallback stops the unnecessary re-renders of the child components when we use the functions 












//  i wanted to create 5 components 
// title,count, countbtn, age, agebtn