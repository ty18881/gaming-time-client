import React from 'react'
import { Link } from 'react-router-dom';


function Footer(props) {

  const navStyle = {
    color: 'white',
  }
  

    return(
        <>

    
        <ul className="nav-links">
            <Link to='/about' style={navStyle}>
              <li>About</li>
            </Link>
            <Link to='/welcome' style={navStyle}>
              <li>Welcome</li>
            </Link>
          </ul>
      
        </>
    )
}

export default Footer;