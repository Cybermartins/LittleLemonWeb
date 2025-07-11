import React from 'react';
import './Footer.css';
import footmage from '../../assets/little-lemon-logo-tall-grey.png'

const Footer = () => {
  return (
    <section className='footer container'>
      <p>&copy; 2025 Little Lemon. All rights reserved.</p>
      <img src={footmage} alt="" />
      <ul>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
      </ul>
    </section>
  )
}

export default Footer