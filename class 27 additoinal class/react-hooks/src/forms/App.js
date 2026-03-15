
// import { useState } from "react"

// function App(){
//   // react the state to hold the user input value 
//   const[name, setName] = useState("")
//   return (
//     <div>
//       <h1>Form</h1>
//       <input 
//         type="text"
//         placeholder="Enter the username"
//         onChange={(e) => setName(e.target.value)}
//       />
//       <p>My name: {name}</p>
//     </div>
//   )

// }

// export default App


// controlled form: is controlled by the react using useState..
// for each and every change in the value it will hit the event target



// uncontrolled...it will controll by the browser react
// if we are working for uncontrolled then we have to import useRef hook

import { useRef } from "react"

function App(){
  // ref to access the dom input directly 
  const nameRef = useRef()
  const handleSubmit = () => {
    alert(nameRef.current.value)
  }
  
  return (
    <div>
      <h1>Form</h1>
      <input 
        type="text"
        placeholder="Enter the username"
        ref={nameRef} />

      <button onClick={handleSubmit}>Submit</button>
   
    </div>
  )

}

export default App


// uncontrolled forms is managing by the DOM
// when we add anything to the form it will not check the value, only it will at the time of submit 


//controlled -> usestate -> it will check the value each and every
//uncontrolled -> useRef -> it will not check the value


// simple forms....uncontrolled 
// complex forms -> controlled forms