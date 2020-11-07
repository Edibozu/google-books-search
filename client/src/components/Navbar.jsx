import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h4 className="navbar-brand">Google Books</h4>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Search <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/saved" className="nav-link">Saved</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;