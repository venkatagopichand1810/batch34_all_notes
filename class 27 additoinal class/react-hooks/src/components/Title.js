import { memo } from "react"

function Title() {
    console.log("1. Title")

    return (
        <>
            <h1>Welcome to the shopping site</h1>
        </>
    )

}

export default memo(Title)