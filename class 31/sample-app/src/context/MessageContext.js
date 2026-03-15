

import { createContext } from "react";

//create context
export const MessageContext = createContext()

//provider component
function MessageProvider({ children }) {

  const info = {
    message : "Hello from Grandfather, how are you great grand child",
    something : "helloooooooooooooooooooooo",
    somethingMore : "heeeeeeeeeeeeeeloooooooooooooooooooooooooooooooooooooooooooooo"
  }



  return (
    <MessageContext.Provider value={info}>
      {children}
    </MessageContext.Provider>
  )
}
export default MessageProvider