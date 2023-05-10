import React from "react";
// import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
    <nav className="navbar">
        <h1>Color Palettes</h1>
        <a href='/'>Home</a>
        <a href='/create' className="new-palette">Add a color palette</a>
    </nav>
    );
}

export default NavBar;