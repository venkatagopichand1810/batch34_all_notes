import { useState } from "react"

function App() {
    // store the input value in the state 100
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: ""
    })


    const handleChange = (e) => {
        const name = e.target.name; //to understand which input field,
        const value = e.target.value; //the value which iam entering

        // update the specific field
        setFormData({
            ...formData,
            [name] : value

        })
    }



    // function runs when the form is submitted
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("name is " + formData.name)
        alert("email is " + formData.email)
        alert("password is " + formData.password)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Enter your name"
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Enter your email"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Enter your password"
                    onChange={handleChange}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default App