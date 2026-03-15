    import { Link } from "react-router-dom";
    import { useNavigate } from "react-router-dom"; //programtically navigate

    function Users() {

        // create the navigate function 


        const users = [
            {id: 1, name: "venkat"},
            {id: 2, name: "ram"},
            {id: 3, name: "shiva"}
        ];

        return (
            <div>
                <h2>Users list </h2>
                {/* loop through users  */}
                {users.map((user) => (
                    <p>
                        <Link to = {`/users/${user.id}`}>
                        View {user.name} details
                        </Link>
                    
                    </p>
                ))}

                
            </div>
        )

    }

    export default Users