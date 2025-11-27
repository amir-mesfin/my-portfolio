import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTelegram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'E-Commerce Solutions',
    'Website Maintenance',
    'UI/UX Design'
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/amir-mesfin',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/amir-mesfin-803669362/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Telegram',
      icon: <FaTelegram />,
      url: 'https://t.me/abushe136',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      url: 'https://web.facebook.com/reel/3032737153575729',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:amir.mesfin136@gmail.com',
      color: 'hover:text-red-400'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="logo-icon">
                <span className="logo-dot"></span>
                <span className="logo-bar"></span>
              </div>
              <span className="brand-text">Amir Mesfin</span>
            </div>
            <p className="brand-description">
              Full Stack Web Developer specializing in MERN stack applications.
              Creating digital experiences that make a difference.
            </p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="links-title">Quick Links</h3>
            <ul className="links-list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="link-item">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-links">
            <h3 className="links-title">Services</h3>
            <ul className="links-list">
              {services.map((service) => (
                <li key={service}>
                  <span className="link-item">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3 className="links-title">Get In Touch</h3>
            <div className="contact-info">
              <div className="contact-item">
                <svg className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>amir.mesfin136@gmail.com</span>
              </div>
              <div className="contact-item">
                <svg className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+251 912 345 678</span>
              </div>
              <div className="contact-item">
                <svg className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Dessie, Ethiopia</span>
              </div>
              <div className="contact-item">
                <svg className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Available for freelance work</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Amir Mesfin. All rights reserved.</p>
              <p className="built-with">
                Built with ❤️ using React & Tailwind CSS
              </p>
            </div>

            <div className="bottom-links">
              <a href="#privacy" className="bottom-link">Privacy Policy</a>
              <a href="#terms" className="bottom-link">Terms of Service</a>
              <button
                onClick={scrollToTop}
                className="back-to-top"
                aria-label="Back to top"
              >
                <svg className="top-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;