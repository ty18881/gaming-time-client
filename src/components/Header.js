import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    
    render() {

        return (
            <>
            <header>
                <ul className="nav-links">
                    
                    <Link to='/'>
                    <li>Play!</li>
                    </Link>
                    <Link to='/about'>
                    <li>About</li>
                    </Link>
                    <Link to='/welcome'>
                    <li>Welcome</li>
                    </Link>
                </ul>
            <h1>
                Earn Gaming Time!  Just answer a few math questions!
            </h1>
            </header>
            </>
        )
    }
}

export default Header;