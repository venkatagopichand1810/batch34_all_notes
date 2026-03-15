// forms in react
// form is used to collect the user information 

import { useState } from "react";

function App() {

    // state varaible to store the input value
    const [name, setName] = useState("");
    const [city, setCity] = useState("");


    // function runs when the input value changes
    const handleChange = (e) => {
        //e.target.value = current input value
        setName(e.target.value)

    }

    const handleCity = (e) => {
        setCity(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents page reload
        alert("Hello welcome " + name)
    }


    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter the name"
                value={name}
                onChange={handleChange} //update the state

            />
            <br />

            <select value={city} onChange={handleCity}>
                <option value="">Select City</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Hyderabad">Hyderabad</option>
            </select>

            <h1>Selected City: {city}</h1>

            <button type="submit">Submit</button>
        </form>


    )

}

export default App



{/* <input type = "text" value = "venkat" /> */ }


// when we are working with forms we have add two events

// 1) onSubmit ... whenever we are submitting the form, then this onsubmit call
// 2) onChange ... whenever there is a change in the input field then onchange will be triggered


// for both the events we have to have the methods
