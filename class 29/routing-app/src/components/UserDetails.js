// useParams() is the hook used to extract the value from the url 

import { Navigate, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";


function UserDetails() {

    // read URL parameter
    const { id } = useParams();
        const navigate = useNavigate();

    // some dummy data

    const users = [
        { id: 1, name: "venkat", city: "bangalore", state: "KA", pincode: "560036" },
        { id: 2, name: "ram", city: "chennai", state: "chennai", pincode: "606604" },
        { id: 3, name: "akhil", city: "mumbai", state: "mumbai", pincode: "974474" }
    ];

    // find the user based on the URL id
    const user = users.find((user) => user.id === Number(id));

    return (
        <div>
            <h2>User Details</h2>

            {user ? (
                <>
                    <p><strong>ID:</strong>{user.id}</p>
                    <p><strong>Name:</strong>{user.name}</p>
                    <p><strong>City:</strong>{user.city}</p>
                    <p><strong>State:</strong>{user.state}</p>
                    <p><strong>Pincode:</strong>{user.pincode}</p>
                </>
            ) : (
                <p>User is not found</p>
            )}

            <button onClick = {() => navigate(-1)}>Go back</button>
        </div>
    )

}

export default UserDetails