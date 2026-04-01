import React from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      {/* Decorative noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
