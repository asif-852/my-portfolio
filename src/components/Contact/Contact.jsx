import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiSend } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.1 },
  }),
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'sent' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // Placeholder: connect to email service (EmailJS, Formspree, etc.)
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="contact__blob" />
      <div className="container">
        <motion.p className="section-label" variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={0}>
          contact
        </motion.p>
        <motion.h2 className="section-title" variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={1}>
          Get In Touch
        </motion.h2>
        <motion.div className="section-divider" variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={2} />

        <div className="contact__grid">
          {/* Left: Info */}
          <motion.div className="contact__info" variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={3}>
            <p className="contact__blurb">
              I'm currently open to new opportunities. Whether you have a question, a project idea, or just want to say hello — my inbox is always open!
            </p>
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`}
              className="contact__email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMail /> {personalInfo.email}
            </a>
            <div className="contact__socials">
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FiTwitter /></a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={4}
          >
            <div className="contact__form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                rows={6}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary contact__submit" disabled={status === 'sending'}>
              <FiSend />
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'sent' && (
              <motion.p
                className="contact__success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✅ Message sent! I'll get back to you soon.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
