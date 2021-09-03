import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';




const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbar-links">
                <li className="navbar-list-item">
                    <Link className="item" to="/Properties">View Properties</Link>
                    </li>
                    <li className="navbar-list-item">
                        <Link className="item" to="/Add-Properties">Add a Property</Link>
                    </li>
            </ul>
    
        </div>

    )
}

export default Navbar;
