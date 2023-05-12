import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
    <nav className="navbar">
        <a href='/home'>🎵 Home</a>
        <a href='/saved'>🎵 Saved Sheets</a>
        <a href='/create' className="new-palette">🎵 Add Sheet Music</a>
    </nav>
    );
}

export default NavBar;