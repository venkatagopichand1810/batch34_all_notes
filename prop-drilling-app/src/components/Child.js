import GrandChild from "./GrandChild"

function Child({call}) {

    return (
        <>
            <GrandChild call = {call} />
        </>
    )

}

export default Child