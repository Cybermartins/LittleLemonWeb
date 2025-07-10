import React from 'react';
import './Hero.css';
import hero_pic from '../../assets/restauranfood.jpg'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className='btn'>Reserve a Table</button>
      </div>
      <img src={hero_pic} alt='' className='hero-pic' />
    </div>
  )
}

export default Hero