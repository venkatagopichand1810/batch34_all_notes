import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css"

import Layout from "./Layout/MainLayout";
import DashboardLayout from "./dashboard/DashboardLayout";

// import components
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Profile from "./dashboard/Profile";
import Settings from "./dashboard/Settings";
// main app component

// users import 
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <BrowserRouter>
    
      {/* Routes Configuration */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

          {/* users routs */}
          <Route path = 'users' element = {<Users />} />
          <Route path="users/:id" element = {<UserDetails />} />


          {/* dashboard nesting routes */}

          <Route path="dashboard" element = {<DashboardLayout />}>
          
            <Route path="profile" element = {<Profile />} />
            <Route path="settings" element = {<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}


export default App


