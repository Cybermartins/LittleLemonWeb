import React from 'react'
import logo from '../../assets/littlelemonlogo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt='' className='logo'/>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  )
}

export default Navbar