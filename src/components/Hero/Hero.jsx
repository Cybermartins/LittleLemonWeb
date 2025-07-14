import React from 'react';
import './Hero.css';
import hero_pic from '../../assets/restauranfood.jpg'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className='hero container' name='hero'
      aria-label='Promotional section Little Lemon restaurant'>
      <section className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</p>
        <section className='center-btn' aria-label='Center the button for smaller resolution'>
          <Link to='reservation' smooth={true} offset={-120} duration={500} className='nav-item' spy={true} activeClass='active' aria-label='Go to reservation section' >
            <button className='btn'aria-label='Reserve a table at Little Lemon'>Reserve a Table</button>
          </Link>
        </section>
      </section>
      <img src={hero_pic} alt='Chef preparing food at Little Lemon' className='hero-pic' />
    </section>
  )
}

export default Hero