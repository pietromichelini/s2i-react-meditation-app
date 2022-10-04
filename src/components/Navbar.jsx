import React from 'react'
import {NavLink} from 'react-router-dom'
import {Link, animateScroll as scroll} from "react-scroll"
import logo from '../assets/image/lotus-white.png'

function Navbar() {

  function scrollToTop() {
    scroll.scrollToTop();
  };

  return (
    <nav>
      <div className="nav-container">
        <Link className='nav-link'>
          <img 
          className='nav-logo' 
          src={logo} 
          alt="lotus"
          onClick={scrollToTop} />
        </Link>
     <div className="right-nav-links-container">
        <div className="center-nav-links-container">
          <Link 
          className='center nav-link' 
          to="why"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >
              <button className='center-btn'>Why</button>
          </Link>
          <Link 
          className='center nav-link' 
          to="how"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >
              <button className='center-btn'>How</button>
          </Link>
        </div>
        <NavLink className='nav-link' to="/try">
        <button className='try-btn'>
          Try Now
        </button>
          </NavLink>
     </div>
      </div>

    </nav>
  )
}

export default Navbar