import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks, personalInfo } from '../../data/portfolioData';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const initials = personalInfo.name.split(' ').map(n => n[0]).join('');

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="hero" smooth duration={600} className="navbar__logo">
          <span className="navbar__logo-box">{initials}</span>
          <span className="navbar__logo-name">{personalInfo.name}</span>
        </Link>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map((link, i) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={600}
                offset={-70}
                activeClass="active"
                spy
                className="navbar__link"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={personalInfo.resumeUrl}
              className="btn btn-outline navbar__resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
          >
            <ul>
              {navLinks.map((link, i) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-70}
                    className="navbar__mobile-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={personalInfo.resumeUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
