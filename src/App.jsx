import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Specials from './components/Specials/Specials';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Specials/>
    </div>
  )
}

export default App
