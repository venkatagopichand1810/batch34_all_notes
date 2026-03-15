import "./Styles.css"

function Styles() {

const header3 = {
    color: "blue",
    backgroundColor: "black",
    fontSize: "100px",
    padding: "20px"
}

const isActive = true;


    return (
        <>
            <h1 style={{color: "green", fontSize: "155px", backgroundColor: "black"}}>Welcome to home page</h1>
            <h2 className="heading2">This is heading 2</h2>
            <h3 style={header3}>This is heading 3</h3>

            <button className={isActive ? "activeBtn" : "inactiveBtn"}>Click ME</button>
        </>
    )

}

export default Styles



// how to apply styles in react

// inline, internal and external


