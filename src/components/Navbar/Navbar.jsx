import React, { useState } from 'react';
import logo from '../../assets/littlelemonlogo.png';
import menu_icon from '../../assets/menu-icon.png';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  };
  return (
    <nav className="container" aria-label="Primary site navigation">
      <a href="/" aria-label="Little Lemon Home">
        <img src={logo} alt="Little Lemon logo" className="logo" />
      </a>

      <ul className={mobileMenu ? '' : 'hide-mobile-menu'} role="menubar">
        <li role="none">
          <Link
            to="hero"
            smooth={true}
            offset={-120}
            duration={500}
            className="nav-item"
            spy={true}
            activeClass="active"
            role="menuitem"
            aria-label="Navigate to Home section"
          >
            Home
          </Link>
        </li>

        <li role="menuitem" aria-label="About section">About</li>
        <li role="menuitem" aria-label="Menu section">Menu</li>

        <li role="none">
          <Link
            to="reservation"
            smooth={true}
            offset={-120}
            duration={500}
            className="nav-item"
            spy={true}
            activeClass="active"
            role="menuitem"
            aria-label="Make a reservation"
          >
            Reservations
          </Link>
        </li>

        <li role="menuitem" aria-label="Order online section">Order Online</li>
        <li role="menuitem" aria-label="User login section">Login</li>
      </ul>
      <img src={menu_icon} alt="Menu icon" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;