import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCalendar, FiAward } from 'react-icons/fi';
import { personalInfo, skills, education } from '../../data/portfolioData';
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
        <div className="about__grid">

          {/* ── LEFT — section header + bio + CTA ── */}
          <div className="about__left">
            <motion.p
              className="section-label"
              variants={fadeUp} initial="hidden"
              animate={isInView ? 'visible' : 'hidden'} custom={0}
            >
              about me
            </motion.p>
            <motion.h2
              className="section-title"
              variants={fadeUp} initial="hidden"
              animate={isInView ? 'visible' : 'hidden'} custom={1}
            >
              A bit about myself
            </motion.h2>
            <motion.div
              className="section-divider"
              variants={fadeUp} initial="hidden"
              animate={isInView ? 'visible' : 'hidden'} custom={2}
            />

            <motion.div
              className="about__bio"
              variants={fadeUp} initial="hidden"
              animate={isInView ? 'visible' : 'hidden'} custom={3}
            >
              {personalInfo.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <a href={`mailto:${personalInfo.email}`} className="btn btn-primary about__cta">
                Say Hello 👋
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT — Education (top) + Skills (bottom) ── */}
          <div className="about__right">

            {/* Education cards */}
            <motion.div
              className="about__education"
              variants={fadeUp} initial="hidden"
              animate={isInView ? 'visible' : 'hidden'} custom={1}
            >
              <h3 className="about__sub-heading">Education</h3>
              <div className="about__edu-list">
                {education.map((edu) => (
                  <div key={edu.id} className="edu-card">
                    <div className="edu-card__accent" />
                    <div className="edu-card__body">
                      <p className="edu-card__degree">{edu.degree}</p>
                      <p className="edu-card__institute">{edu.institute}</p>
                      <div className="edu-card__meta">
                        <span className="edu-card__meta-item">
                          <FiCalendar size={11} />{edu.year}
                        </span>
                        <span className="edu-card__meta-item edu-card__grade">
                          <FiAward size={11} />{edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills — one row per category */}
            <motion.div
              className="about__skills"
              variants={fadeUp} initial="hidden"
              animate={isInView ? 'visible' : 'hidden'} custom={2}
            >
              <h3 className="about__sub-heading">Skills</h3>
              {skills.map((group) => (
                <div key={group.category} className="about__skill-row">
                  <span className="about__skill-category">{group.category}</span>
                  <ul className="about__skill-list">
                    {group.items.map((skill) => (
                      <li key={skill}><span className="tag">{skill}</span></li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

          </div>{/* end RIGHT */}

        </div>
      </div>
    </section>
  );
};

export default About;
