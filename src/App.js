import React from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import CodingProfiles from './components/CodingProfiles/CodingProfiles';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { showExperience } from './data/portfolioData';

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
        {/* Experience is hidden by default. Set showExperience = true in portfolioData.js to re-enable. */}
        {showExperience && <Experience />}
        <CodingProfiles />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
