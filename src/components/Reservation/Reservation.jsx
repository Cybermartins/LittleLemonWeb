import React from 'react';
import './Reservation.css';


const Reservation = () => {
  return (
    <section className='reservation container'>
      <h2>Make Your Reservation</h2>
      <p>Kindly fill your information below</p>

      <form action="" className='form'>
        
        <label htmlFor="fullname">Full Name*</label>
        <input
        type="text"
        className='input-box'
        name="fullname"
        aria-label='FullName*'
        placeholder='Enter your full name'
        autoComplete='off' />
        
        <label htmlFor="phone-number">Phone Number*</label>
        <input
        type="text"
        className='input-box'
        name="phone-number"
        aria-label='PhoneNumber'
        placeholder='Enter your phone number'
        autoComplete='off' />
        
        <label htmlFor="guest">Guests*</label>
        <select name="guest" className='input-box dark' defaultValue="select-a-number">
          <option value="select-a-number">Select a number</option>
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="three">3</option>
          <option value="four">4</option>
          <option value="four-plus">4+</option>
        </select>
        
        <label htmlFor="date">Date</label>
        <input type="date" name="date" className='input-box dark dt' />
      
        <label htmlFor="time">Time*</label>
        <input type="time" name="time " className='input-box dark dt' />
          
        
        

        <input className='btn' type="submit" value="Book a table" />

      </form>
    </section>
  )
}

export default Reservation