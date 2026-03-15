// import { useContext } from "react"
// import {MessageContext} from "../context/MessageContext"
import GrandGrandChild from "./GreatGrandChild"

function GrandChild() {
//   const message = useContext(MessageContext)
    return (
        <>
            <GrandGrandChild />
            {/* <p>
                i am GrandChild....{message}
            </p> */}
        </>
    )

}

export default GrandChild


// prop drillling data is padded through many nested components even though it is not required