import { memo } from "react"

function Age({age}) { 

    console.log("4. age")

    return (
        <>
            <h3>The age is: {age}</h3>
        </>
    )

}

export default memo(Age)