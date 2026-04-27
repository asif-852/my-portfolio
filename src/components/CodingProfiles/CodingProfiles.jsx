import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink, FiCode } from 'react-icons/fi';
import { cpProfiles } from '../../data/portfolioData';
import './CodingProfiles.css';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.1 },
  }),
};

/** Renders a platform icon — falls back to a code glyph if no image is set. */
const PlatformIcon = ({ iconUrl, platform }) => {
  if (iconUrl) {
    return (
      <img
        src={iconUrl}
        alt={`${platform} icon`}
        className="cp-icon__img"
      />
    );
  }
  return (
    <div className="cp-icon__placeholder" aria-label={platform}>
      <FiCode size={22} />
    </div>
  );
};

const CodingProfiles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const featured = cpProfiles.filter(p => p.featured);
  const others   = cpProfiles.filter(p => !p.featured);

  return (
    <section id="cp-profiles" className="cp-profiles section" ref={ref}>
      <div className="container">
        {/* Section header */}
        <motion.p
          className="section-label"
          variants={fadeUp} initial="hidden"
          animate={isInView ? 'visible' : 'hidden'} custom={0}
        >
          competitive programming
        </motion.p>
        <motion.h2
          className="section-title"
          variants={fadeUp} initial="hidden"
          animate={isInView ? 'visible' : 'hidden'} custom={1}
        >
          My Coding Profiles
        </motion.h2>
        <motion.div
          className="section-divider"
          variants={fadeUp} initial="hidden"
          animate={isInView ? 'visible' : 'hidden'} custom={2}
        />

        {/* ── Featured platforms ── */}
        <div className="cp-featured">
          {featured.map((profile, i) => (
            <motion.a
              key={profile.id}
              href={profile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cp-card cp-card--featured"
              variants={fadeUp} initial="hidden"
              animate={isInView ? 'visible' : 'hidden'} custom={i + 3}
              whileHover={{ y: -5 }}
            >
              <div className="cp-card__top">
                <div className="cp-card__icon-wrap">
                  <PlatformIcon iconUrl={profile.iconUrl} platform={profile.platform} />
                </div>
                <FiExternalLink className="cp-card__ext" size={16} />
              </div>

              <div className="cp-card__body">
                <h3 className="cp-card__platform">{profile.platform}</h3>
                <p className="cp-card__handle">{profile.handle}</p>
                {profile.stats && (
                  <p className="cp-card__stats">{profile.stats}</p>
                )}
              </div>

              <span className="cp-card__badge">Featured</span>
            </motion.a>
          ))}
        </div>

        {/* ── Other platforms ── */}
        {others.length > 0 && (
          <>
            <motion.h3
              className="cp-other__title"
              variants={fadeUp} initial="hidden"
              animate={isInView ? 'visible' : 'hidden'} custom={6}
            >
              Other Platforms
            </motion.h3>

            <div className="cp-other">
              {others.map((profile, i) => (
                <motion.a
                  key={profile.id}
                  href={profile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cp-chip"
                  variants={fadeUp} initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'} custom={i + 7}
                  whileHover={{ y: -3 }}
                >
                  <div className="cp-chip__icon">
                    <PlatformIcon iconUrl={profile.iconUrl} platform={profile.platform} />
                  </div>
                  <span className="cp-chip__name">{profile.platform}</span>
                  {profile.handle && profile.handle !== '—' && (
                    <span className="cp-chip__handle">{profile.handle}</span>
                  )}
                  <FiExternalLink size={13} className="cp-chip__ext" />
                </motion.a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CodingProfiles;
