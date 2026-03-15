
import { Link, Outlet } from "react-router-dom"

function MainLayout() {

    return (
        <>
            <nav style={{ marginLeft: "20px" }}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
                <Link to = "/dashboard">Dashboard</Link>
                <Link to = "/users">Users</Link>
                <Link to="/pagenotfound">404</Link>
            </nav>

            {/* page content...nested routing */}
            <Outlet />

        </>
    )
}

export default MainLayout