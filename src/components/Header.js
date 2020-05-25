import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    
    render() {

        return (
            <>
            <header className="rounded-lg">
            <h2>
                Math Practice for Gaming Time?  What Parent Would Say No?
            </h2>
                <ul className="nav-links">
                    
                    <Link to='/' className='route-link'>
                    <li>Play</li>
                    </Link>
                    <Link to='/about' className='route-link'>
                    <li>About</li>
                    </Link>
                    <Link to='/welcome' className='route-link'>
                    <li>Welcome</li>
                    </Link>
                </ul>
           
            </header>
            </>
        )
    }
}

export default Header;