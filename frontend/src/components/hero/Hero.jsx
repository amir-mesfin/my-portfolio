import { useState, useEffect } from 'react';
import './Hero.css';
import Profiler from "../../assets/images/profile.png";
const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Software Developer",
    "Web Developer",
    "Full Stack Developer",
    "MERN Stack Specialist",
    "React Developer",
    "Node.js Developer"
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const current = roles[currentRole];

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText.length < current.length) {
        // Typing
        setDisplayText(current.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        // Deleting
        setDisplayText(current.slice(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === current.length) {
        // Start deleting after pause
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText.length === 0) {
        // Move to next role
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <section id="home" className="hero-section">
      {/* Background Elements */}
      <div className="hero-background">
        <div className="hero-blob-1"></div>
        <div className="hero-blob-2"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Text Content */}
          <div className={`hero-text ${isVisible ? 'hero-visible' : ''}`}>
            {/* Badge */}
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Available for freelance work
            </div>

            {/* Main Heading */}
            <h1 className="hero-heading">
              Hi, I'm <span className="hero-name">Amir Mesfin</span>
            </h1>

            {/* Animated Roles */}
            <div className="hero-roles">
              <div className="roles-wrapper">
                <span className="static-text">I'm a </span>
                <div className="dynamic-roles">
                  <span className="role-text active">
                    {displayText}
                    <span className="cursor">|</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="hero-description">
              Passionate MERN stack developer crafting robust and scalable web applications.
              Expert in MongoDB, Express.js, React.js, and Node.js with focus on
              performance, clean code, and exceptional user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <a href="#portfolio">

                <button className="btn-primary">
                  View My Work
                  <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </a>

              <button className="btn-secondary">
                <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">25+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className={`hero-image-wrapper ${isVisible ? 'hero-visible' : ''}`}>
            <div className="hero-image-container">
              {/* Main Image */}
              <img
                src={Profiler}
                alt="Amir Mesfin - Developer"
                className="hero-main-image"
              />

              {/* Floating Elements */}
              <div className="floating-card card-1">
                <div className="card-icon react">⚛️</div>
                <span>React.js</span>
              </div>

              <div className="floating-card card-2">
                <div className="card-icon node">⬢</div>
                <span>Node.js</span>
              </div>

              <div className="floating-card card-3">
                <div className="card-icon mongo">🍃</div>
                <span>MongoDB</span>
              </div>

              <div className="floating-card card-4">
                <div className="card-icon express">🚀</div>
                <span>Express.js</span>
              </div>

              {/* Background Decoration */}
              <div className="image-background"></div>

              {/* Status Indicator */}
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span>Available for work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;