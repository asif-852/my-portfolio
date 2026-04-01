import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../../data/portfolioData';
import './Projects.css';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.08 },
  }),
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.p className="section-label" variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={0}>
          projects
        </motion.p>
        <motion.h2 className="section-title" variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={1}>
          Things I've Built
        </motion.h2>
        <motion.div className="section-divider" variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={2} />

        {/* Featured */}
        <div className="projects__featured">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              className="project-card project-card--featured"
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={i + 3}
            >
              <div className="project-card__header">
                <div className="project-card__meta">
                  <span className="project-card__label">Featured Project</span>
                </div>
                <div className="project-card__links">
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FiGithub />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.h3
          className="projects__other-title"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={6}
        >
          Other Noteworthy Projects
        </motion.h3>

        <div className="projects__other">
          {(showAll ? otherProjects : otherProjects.slice(0, 3)).map((project, i) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={i + 7}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <div className="project-card__header">
                <span className="project-card__folder">📁</span>
                <div className="project-card__links">
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo"><FiExternalLink /></a>
                  )}
                </div>
              </div>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {otherProjects.length > 3 && (
          <motion.div
            className="projects__show-more"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={10}
          >
            <button className="btn btn-outline" onClick={() => setShowAll(s => !s)}>
              {showAll ? 'Show Less' : `Show More (${otherProjects.length - 3} more)`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
