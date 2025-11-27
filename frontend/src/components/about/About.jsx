import { useState, useEffect, useRef } from 'react';
import './About.css';
import about from "../../assets/images/about.png"
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const personalInfo = [
    { label: 'Birthday', value: '1 May 2003', icon: '🎂' },
    { label: 'Website', value: 'https://amir136.vercel.app', icon: '🌐' },
    { label: 'Phone', value: '+251 962 945 025', icon: '📱' },
    { label: 'City', value: 'Dessie, Ethiopia', icon: '🏙️' },
    { label: 'Age', value: '21', icon: '🎯' },
    { label: 'Degree', value: "Bachelor's Degree", icon: '🎓' },
    { label: 'Email', value: 'amir.mesfin136@example.com', icon: '📧' },
    { label: 'Freelance', value: 'Available', icon: '💼', status: 'available' }
  ];

  const skills = [
    { name: 'React', level: 90, color: '#61dafb' },
    { name: 'JavaScript', level: 85, color: '#f7df1e' },
    { name: 'Node.js', level: 80, color: '#68a063' },
    { name: 'Tailwind CSS', level: 88, color: '#06b6d4' },
    { name: 'SQL', level: 75, color: '#00758f' },
    { name: 'HTML/CSS', level: 95, color: '#e34f26' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Get to know more about my background, skills, and journey in software development
          </p>
        </div>

        <div className="about-content">
          {/* Left Column - Image & Personal Info */}
          <div className="about-left">
            {/* Profile Image */}
            <div className={`image-container ${isVisible ? 'animate-in' : ''}`}>
              <div className="profile-image-wrapper">
                <img
                  src={about}
                  alt="Amir Mesfin"
                  className="profile-image"
                />
                <div className="image-overlay"></div>
                <div className="floating-element element-1">⚛️</div>
                <div className="floating-element element-2">🚀</div>
                <div className="floating-element element-3">💻</div>
              </div>
            </div>

            {/* Personal Info Grid */}
            <div className={`info-grid ${isVisible ? 'animate-in' : ''}`}>
              {personalInfo.map((info, index) => (
                <div
                  key={info.label}
                  className="info-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <span className="info-label">{info.label}</span>
                    <span className={`info-value ${info.status || ''}`}>
                      {info.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Description & Skills */}
          <div className="about-right">
            {/* Description */}
            <div className={`description-content ${isVisible ? 'animate-in' : ''}`}>
              <h3 className="description-title">
                Software Engineering Student & Web Developer
              </h3>
              <div className="description-text">
                <p>
                  I am <strong>Amir Mesfin</strong>, a passionate Software Engineering student at
                  <strong> Arba Minch University</strong> with a strong focus on modern web development.
                  I specialize in building clean, responsive, and user-friendly applications using
                  <strong> React, Tailwind, Node.js, and SQL</strong>.
                </p>
                <p>
                  I am dedicated to continuous learning, problem-solving, and creating software
                  that delivers real value and impact. My journey in technology is driven by
                  curiosity and the desire to build solutions that make a difference.
                </p>
              </div>

              {/* Stats */}
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2+</div>
                  <div className="stat-label">Years Learning</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className={`skills-section ${isVisible ? 'animate-in' : ''}`}>
              <h4 className="skills-title">Technical Skills</h4>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skill-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          backgroundColor: skill.color
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className={`cta-section ${isVisible ? 'animate-in' : ''}`}>
              <button className="download-btn">
                <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </button>

              <a href="#connect">
                <button className="contact-btn">
                  <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Let's Talk
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;