import React from 'react';
import './Card.css';
import delivery from '../../assets/delivery.svg'

const Card = ({pic, title, price, description}) => {
  return (
    <section className='card'>
      <img src={pic} alt="" className='card-pic' />
      <section className='card-text'>
        <section className='title'>
          <h2>{title}</h2>
          <span className='price'>{price}</span>
        </section>
        <p>{description} </p>
        <h4 className='delivery'>Order a delivery <img src={delivery} alt="delivery-icon" className='icon'/></h4>
      </section>
    </section>
  )
}

export default Card