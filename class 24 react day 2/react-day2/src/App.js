import "./App.css"

function App() {

    function clickme() {
        alert("hello hero")
    }

    const name = "venkat";
    const place = "bangalore";
    const user = {
        name: "venkat",
        country: "india"
    }

    const isLoggedIn = false; //if he is loggedin show welcome if not show login
    const s1 = null;
    const s2 = undefined;
    const s3 = "venkat";
    const s4 = 20;
    const s5 = true
    return (
        // <div>
        //     <h1>Welcome to react</h1>
        //     <p>This is paragraph tag</p>
        // </div>
        <>
            <h1>Venkat</h1>
            <p>venkat is here</p>
            <div className="something">
                this is something
                <button onClick={clickme}>CLick me</button>
            </div>

            <h1>My name is {name} from {place}</h1>
            <h2>Name is {user.name} and country is {user.country}</h2>
            <h3>{isLoggedIn ? "Welcome back" : "Login first "}</h3>

            <br />
            {s1}
            {s2}
            {s3}
            {s4}
            {s5}
            <br /><br />
            <label htmlFor = "name">Username</label>
            <input type="text" id = "name"/>
        </>
    )

}

export default App





