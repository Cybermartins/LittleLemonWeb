import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Specials from './components/Specials/Specials';
import Reservation from './components/Reservation/Reservation';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Specials/>
      <Reservation/>
      <Footer/>
    </>
  )
}

export default App
