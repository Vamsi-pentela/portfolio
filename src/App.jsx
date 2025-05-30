// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Service from './components/Services/Service';
import Projects from './components/Projects/Projects';
import Connect from './components/Connect/Connect';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Service />
      <Projects />
      <Connect />
      <Footer />
    </div>
  );
};

export default App;
