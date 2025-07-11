import React from 'react';
import './Reservation.css';

const handleSubmit = (event)=> {

}

const Reservation = () => {
  return (
    <section className='reservation container' name='reservation'>
      <h2>Make Your Reservation</h2>
      <p>Kindly fill your information below</p>

      <form action="" className='form' onSubmit={handleSubmit}>
        
        <label htmlFor="fullname">Full Name*</label>
        <input
        type="text"
        className='input-box'
        name="fullname"
        aria-label='FullName*'
        placeholder='Enter your full name'
        autoComplete='off'
        required
        minLength={3}
        maxLength={50} />
        
        <label htmlFor="phone-number">Phone Number*</label>
        <input
        type="number"
        className='input-box'
        name="phone-number"
        aria-label='PhoneNumber'
        placeholder='Enter your phone number'
        autoComplete='off'
        required
        minLength={8}
        maxLength={11} />
        
        <label htmlFor="guest">Guests*</label>
        <select name="guest" className='input-box dark' defaultValue="select-a-number" required>
          <option value="select-a-number">Select a number</option>
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="three">3</option>
          <option value="four">4</option>
          <option value="four-plus">4+</option>
        </select>

        <label htmlFor="table">Table ID</label>
        <select name="table" className='input-box dark' defaultValue="table #">
          <option value="table #">table #</option>
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="A3">A3</option>
          <option value="A4">A4</option>
          <option value="B1">B1</option>
          <option value="B2">B2</option>
          <option value="B3">B3</option>
          <option value="B4">B4</option>
          <option value="C1">C1</option>
          <option value="C2">C2</option>
          <option value="C3">C3</option>
          <option value="C4">C4</option>
          <option value="D1">D1</option>
          
          
        </select>
        
        <label htmlFor="date">Date</label>
        <input type="date" name="date" className='input-box dark'
         min={new Date().toISOString().split("T")[0]}/>
      
        <label htmlFor="time">Time*</label>
        <input type="time" name="time " className='input-box dark' />
        
        
        

        <input className='btn' type="submit" value="Book a table" />

      </form>
    </section>
  )
}

export default Reservation