import React from 'react';
import './Specials.css';
import salad_pic from '../../assets/greek salad.jpg';
import bruchetta_pic from '../../assets/brucheta.png';
import dessert_pic from '../../assets/lemon dessert.jpg';
import Card from '../Card/Card';

const salad = {
  title: 'Greek Salad',
  price: '$12.99',
  description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
};
const bruchetta = {  
  title: 'Bruchetta',
  price: '$ 5.99',
  description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. '
};
const dessert = {  
  title: 'Lemon Dessert',
  price: '$ 5.00',
  description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
};

const Specials = () => {
  return (
    <div className='specials container'>
      <h2>Specials</h2>
      <button className='btn-2'>Online Menu</button>
      <div className='cards'>
        <Card
        pic={salad_pic}
        title={salad.title}
        price={salad.price}
        description={salad.description}/>

        <Card
        pic={bruchetta_pic}
        title={bruchetta.title}
        price={bruchetta.price}
        description={bruchetta.description}/>

        <Card
        pic={dessert_pic}
        title={dessert.title}
        price={dessert.price}
        description={dessert.description}/>
      </div>
    </div>
  )
}

export default Specials