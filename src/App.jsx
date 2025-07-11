import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Specials from './components/Specials/Specials';
import Reservation from './components/Reservation/Reservation';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Specials/>
      <Reservation/>
    </div>
  )
}

export default App
