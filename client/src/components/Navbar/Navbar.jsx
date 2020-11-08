import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h4 className="navbar-brand">Google Books</h4>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/search" className="nav-link">Search <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Saved</Link>
                    </li>
                </ul>
            </nav>
            <br />
            <div className="container">
                <h3 className="card-header text-center">
                    Google Books Search
                </h3>
                <h6 className="card-body text-center">
                    Search for and Save Books of Interest.
                </h6>
            </div>
        </div>
    );
};

export default Navbar;