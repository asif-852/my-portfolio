import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Hero.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Hero = () => (
  <section id="hero" className="hero section">
    {/* Glow blobs */}
    <div className="hero__blob hero__blob--1" />
    <div className="hero__blob hero__blob--2" />

    <div className="container hero__inner">
      <motion.div
        className="hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero__greeting" variants={itemVariants}>
          <span className="hero__greeting-tag">Hi, my name is</span>
        </motion.p>

        <motion.h1 className="hero__name" variants={itemVariants}>
          {personalInfo.name}
        </motion.h1>

        <motion.h2 className="hero__role" variants={itemVariants}>
          {personalInfo.role}
        </motion.h2>

        <motion.p className="hero__tagline" variants={itemVariants}>
          {personalInfo.tagline}
        </motion.p>

        <motion.div className="hero__actions" variants={itemVariants}>
          <Link to="projects" smooth duration={600} offset={-70}>
            <button className="btn btn-primary">View My Work</button>
          </Link>
          <Link to="contact" smooth duration={600} offset={-70}>
            <button className="btn btn-outline">Get In Touch</button>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div className="hero__socials" variants={itemVariants}>
          {personalInfo.social.github && (
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
          )}
          {personalInfo.social.linkedin && (
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
          )}
          {personalInfo.social.twitter && (
            <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FiTwitter />
            </a>
          )}
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMail />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <Link to="about" smooth duration={600} offset={-70}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiArrowDown size={20} />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default Hero;
