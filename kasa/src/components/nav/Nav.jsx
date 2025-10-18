import React from "react"
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <NavLink to='/' className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? "active" : ""}>A Propos</NavLink>
        </nav>
    )
}

export default Nav