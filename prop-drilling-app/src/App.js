// import Child from "./components/Child"

import College from "./University/College"


function App() {

  const hallTicketNumber = "HT-1234-567"

  return (
    <>
    
      {/* <Child call = "hello beta, how are you from your dad" /> */}

      <hr />
    
      <College hallTicketNumber = {hallTicketNumber} />
    </>
  )
}

export default App