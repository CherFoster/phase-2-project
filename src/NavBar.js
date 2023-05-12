import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
     <nav className="navbar">
        <NavLink to="/home">🎵 Home</NavLink>
        <NavLink to="/saved">🎵 Saved Sheets</NavLink>
        <NavLink to="/create" className="new-palette">🎵 Add Sheet Music</NavLink>
     </nav>
    );
}

export default NavBar;