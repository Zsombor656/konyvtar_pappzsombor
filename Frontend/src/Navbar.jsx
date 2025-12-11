import React from "react";
import { Link } from "react-router-dom";
import './index.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/">Kezdőoldal</Link></li>
                <li><Link to="/konyvek">Könyvek</Link></li>
                <li><Link to="/ujkonyv">Új Könyv</Link></li>
                <li><Link to="konyvtorles/:id">Könyv törlés</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar;