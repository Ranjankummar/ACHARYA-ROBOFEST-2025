import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Coordinators from './components/Coordinators';
import Registration from './components/Registration';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Coordinators />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}

export default App;
