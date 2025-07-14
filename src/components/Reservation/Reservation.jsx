import React from 'react';
import './Reservation.css';
import BookingForm from '../BookingForm/BookingForm';

const handleSubmit = (event)=> {

}

const Reservation = () => {
  return (
    <section className='reservation container' name='reservation'>
      <h2>Make Your Reservation</h2>
      <p>Kindly fill your information below</p>    
      <BookingForm/>
    </section>
  )
}

export default Reservation