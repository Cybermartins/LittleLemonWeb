import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Specials from './components/Specials/Specials';
import Reservation from './components/Reservation/Reservation';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      {/* Landmark navigation */}
      <header aria-label="Main navigation">
        <Navbar />
      </header>

      {/* Main content area */}
      <main>
        <section aria-label="Hero section">
          <Hero />
        </section>

        <section aria-label="Specials section">
          <Specials />
        </section>

        <section aria-label="Reservation section">
          <Reservation />
        </section>
      </main>

      {/* Footer with contact or additional links */}
      <footer aria-label="Footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;