import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMapPin, FiBriefcase } from 'react-icons/fi';
import { experience } from '../../data/portfolioData';
import './Experience.css';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.1 },
  }),
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="experience section" ref={ref}>
      <div className="container">
        <motion.p className="section-label" variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={0}>
          experience
        </motion.p>
        <motion.h2 className="section-title" variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={1}>
          Where I've Worked
        </motion.h2>
        <motion.div className="section-divider" variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={2} />

        <div className="experience__timeline">
          {experience.map((job, i) => (
            <motion.div
              key={job.id}
              className="exp-item"
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={i + 3}
            >
              {/* Timeline dot + line */}
              <div className="exp-item__line-col">
                <div className="exp-item__dot" />
                {i < experience.length - 1 && <div className="exp-item__line" />}
              </div>

              {/* Content */}
              <div className="exp-item__content">
                <div className="exp-item__header">
                  <h3 className="exp-item__role">{job.role}</h3>
                  <span className="exp-item__period">{job.period}</span>
                </div>
                <div className="exp-item__meta">
                  <span className="exp-item__company">
                    <FiBriefcase size={13} />
                    {job.company}
                  </span>
                  <span className="exp-item__location">
                    <FiMapPin size={13} />
                    {job.location}
                  </span>
                </div>
                <ul className="exp-item__list">
                  {job.responsibilities.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
