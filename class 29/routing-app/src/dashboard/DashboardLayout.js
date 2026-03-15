import { Link, Outlet } from "react-router-dom"

function DashboardLayout() {

    return (
        <div>

     
            <h2>Dashboard</h2>

            <nav>
                <Link to = "profile">Profile</Link>
                <Link to = "settings">Settings</Link>
            </nav>

                    {/* page content...nested routing */}
            <Outlet />

            
           
        </div>
    )
}

export default DashboardLayout