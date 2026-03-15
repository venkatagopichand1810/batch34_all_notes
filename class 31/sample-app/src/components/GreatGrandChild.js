import { useContext } from "react"
import {MessageContext} from "../context/MessageContext"

function GrandGrandChild() {

    const info = useContext(MessageContext)
    
    return (
        <>
            <h2>Message received: </h2>
            <p>{info.message}</p>
            <h1>{info.something}</h1>
            <h2>{info.somethingMore}</h2>
        </>
    )

}

export default GrandGrandChild