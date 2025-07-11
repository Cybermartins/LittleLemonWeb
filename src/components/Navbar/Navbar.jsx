import React from 'react'
import logo from '../../assets/littlelemonlogo.png';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt='' className='logo'/>
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li>About</li>
        <li>Menu</li>
        <li><Link to='reservation' smooth={true} offset={0} duration={500}>Reservations</Link></li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  )
}

export default Navbar