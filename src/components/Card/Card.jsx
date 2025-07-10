import React from 'react';
import './Card.css';
import delivery from '../../assets/delivery.svg'

const Card = ({pic, title, price, description}) => {
  return (
    <div className='card'>
      <img src={pic} alt="" className='card-pic' />
      <div className='card-text'>
        <div className='title'>
          <h2>{title}</h2>
          <span className='price'>{price}</span>
        </div>
        <p>{description} </p>
        <h4 className='delivery'>Order a delivery <img src={delivery} alt="delivery-icon" className='icon'/></h4>
      </div>
    </div>
  )
}

export default Card