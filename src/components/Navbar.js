import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to = "/home" className='nav-item nav-logo'>
                <h2>Home</h2>
            </Link>
            <Link to = '/' className='nav-item nav-links'>Log in</Link> :
        </div>
    </nav>
  )
}

export default Navbar