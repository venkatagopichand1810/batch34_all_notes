

import { useState } from "react";

function App() {

    // one single state to store the input values
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        department: "",
    });

    // 2. store the submitted data
    const[submittedData, setSubmittedData] = useState(null)
    

    // we need to write the logic to handle all the input value changes
    const handleChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        // update only the change field
        setFormData({
            ...formData,
            [fieldName] : [fieldValue]
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // save the the current form data in the submittedData state
        setSubmittedData(formData)

    }



    return (
        <div>
            <h2>Student Registration Form</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter the name"
                    onChange={handleChange}
           
                />
                <br /> <br />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter the Email"
                    onChange = {handleChange}
                />
                <br /> <br />

                <select name="department" onChange = {handleChange}>
                    <option value="">Select Department</option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="EEE">EEE</option>
                </select>

{/* 10 fields */}
                <br /> <br />

                   <input
                    type="age"
                    name="name"
                    placeholder="Enter the name"
                    onChange={handleChange}
           
                />
                <button type="submit">Submit</button>

            </form>

            <hr />

            {submittedData && (
                <div>
                    <h3>Submiited Detials are as follows</h3>
                    <p><strong>Name:</strong>{submittedData.name}</p>
                    <p><strong>Email:</strong>{submittedData.email}</p>
                    <p><strong>Department:</strong>{submittedData.department}</p>
                </div>
            )}


        </div>
    )



}

export default App



