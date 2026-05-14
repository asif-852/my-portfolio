import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../../data/portfolioData';
import './Contact.css';

// ============================================================
//  EmailJS Configuration
//  TODO: Replace these with your actual EmailJS credentials
//  1. Sign up at https://www.emailjs.com/
//  2. Add an Email Service (Gmail) → copy the Service ID
//  3. Create an Email Template → copy the Template ID
//     Template variables: {{from_name}}, {{from_email}}, {{message}}
//  4. Go to Account → API Keys → copy the Public Key
// ============================================================
const EMAILJS_SERVICE_ID = 'service_nj0imxj';
const EMAILJS_TEMPLATE_ID = 'template_uuc9h7p';
const EMAILJS_PUBLIC_KEY = 'I1eKx3jpfNJarCZ8u';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.1 },
  }),
};

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ from_name: '', from_email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'sent' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('sent');
        setForm({ from_name: '', from_email: '', message: '' });
        setTimeout(() => setStatus(null), 5000);
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setStatus('error');
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="contact section" ref={sectionRef}>
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
            ref={formRef}
            className="contact__form"
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={4}
          >
            <div className="contact__form-row">
              <div className="form-group">
                <label htmlFor="from_name">Name</label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  value={form.from_name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="from_email">Email</label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  value={form.from_email}
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
            {status === 'error' && (
              <motion.p
                className="contact__error"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ❌ Something went wrong. Please try again or email me directly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
