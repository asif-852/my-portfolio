import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks, personalInfo } from '../../data/portfolioData';
import './Navbar.css';

/**
 * Returns the id of the section currently most visible in the viewport.
 * Uses IntersectionObserver so it works correctly even for the last section
 * (which react-scroll's built-in spy misses because the page can't scroll far
 * enough to cross its threshold).
 */
function useActiveSection(ids) {
  const [active, setActive] = useState('');
  const ratioRef = useRef({});

  useEffect(() => {
    const observers = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          ratioRef.current[id] = entry.intersectionRatio;

          // Pick the section with the highest visible ratio
          const best = Object.entries(ratioRef.current).reduce(
            (acc, [key, ratio]) => (ratio > acc.ratio ? { id: key, ratio } : acc),
            { id: '', ratio: -1 }
          );
          if (best.ratio > 0) setActive(best.id);
        },
        { threshold: Array.from({ length: 21 }, (_, i) => i * 0.05) }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionIds = navLinks.map((l) => l.to);
  const activeSection = useActiveSection(sectionIds);

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
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={600}
                offset={-70}
                className={`navbar__link${activeSection === link.to ? ' active' : ''}`}
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
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-70}
                    className={`navbar__mobile-link${activeSection === link.to ? ' active' : ''}`}
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
