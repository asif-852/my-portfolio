import React from 'react';
import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">{personalInfo.name.split(' ').map(n => n[0]).join('')}</span>
        </div>
        <p className="footer__copy">
          Designed &amp; built with <FiHeart className="footer__heart" /> by {personalInfo.name} · {year}
        </p>
        <div className="footer__socials">
          <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
