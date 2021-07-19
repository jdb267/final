import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => { 
    const navStyle = {
        color: 'white'
    };
    
    return(
        <nav>
            <Link style={navStyle} to='/'>
            <h3>Home</h3>
            </Link>
            <ul className='nav-links'>
                <Link style={navStyle} to='/campuses'>
                <li>
                   Campuses
                    </li>
                </Link>
                <Link style={navStyle} to='/students'>
                <li>
                  Students
                    </li>
                </Link>
            </ul></nav>
) };
export default Navbar