import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="Navbar" >
            <NavLink to="/welc" className="active">Main</NavLink>
            <NavLink to="/about" className="active">About Me</NavLink>
            <NavLink to="/exp" className="active">My Experiance</NavLink>
            <NavLink to="/edu" className="active">My Education</NavLink>
            <NavLink to="/skills" className="active">My Skills</NavLink>
            <NavLink to="/projects" className="active">My Projects</NavLink>
            <NavLink to="/contact" className="active">Contact Me</NavLink>
        </div>
    )
}

export default NavBar