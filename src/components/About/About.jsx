import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo, skills } from '../../data/portfolioData';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.1 },
  }),
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.p
          className="section-label"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
        >
          about me
        </motion.p>
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={1}
        >
          A bit about myself
        </motion.h2>
        <motion.div
          className="section-divider"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={2}
        />

        <div className="about__grid">
          {/* Bio */}
          <motion.div
            className="about__bio"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={3}
          >
            {personalInfo.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-primary about__cta"
            >
              Say Hello 👋
            </a>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="about__skills"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={4}
          >
            {skills.map((group) => (
              <div key={group.category} className="about__skill-group">
                <h3 className="about__skill-category">{group.category}</h3>
                <ul className="about__skill-list">
                  {group.items.map((skill) => (
                    <li key={skill}>
                      <span className="tag">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
