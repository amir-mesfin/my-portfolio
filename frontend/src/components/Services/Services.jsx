import { useState, useEffect, useRef } from 'react';
import './Services.css';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Node.js, and MongoDB. Responsive, fast, and user-friendly websites tailored to your needs.',
      features: [
        'Responsive Design',
        'Modern Frameworks',
        'Performance Optimization',
        'Cross-browser Compatibility'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      price: 'Starting at $500'
    },
    {
      id: 2,
      icon: '📱',
      title: 'Frontend Development',
      description: 'Beautiful and interactive user interfaces using React, JavaScript, and modern CSS frameworks. Focus on user experience and responsive design.',
      features: [
        'React Components',
        'UI/UX Design',
        'Mobile First Approach',
        'Interactive Elements'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Tailwind'],
      price: 'Starting at $300'
    },
    {
      id: 3,
      icon: '⚙️',
      title: 'Backend Development',
      description: 'Robust server-side solutions with Node.js, Express, and database management. API development, authentication, and data processing.',
      features: [
        'RESTful APIs',
        'Database Design',
        'Authentication Systems',
        'Server Optimization'
      ],
      technologies: ['Node.js', 'Express', 'MongoDB', 'SQL', 'JWT'],
      price: 'Starting at $400'
    },
    {
      id: 4,
      icon: '🛒',
      title: 'E-Commerce Solutions',
      description: 'Complete online store development with shopping cart, payment integration, and inventory management systems.',
      features: [
        'Payment Integration',
        'Shopping Cart',
        'Product Management',
        'Order Processing'
      ],
      technologies: ['MERN Stack', 'Stripe/PayPal', 'Firebase', 'Redux'],
      price: 'Starting at $800'
    },
    {
      id: 5,
      icon: '🔧',
      title: 'Website Maintenance',
      description: 'Ongoing support, updates, and maintenance for your existing websites. Security updates, performance monitoring, and feature additions.',
      features: [
        'Regular Updates',
        'Security Patches',
        'Performance Monitoring',
        'Technical Support'
      ],
      technologies: ['All Technologies', 'Security', 'Performance', 'Support'],
      price: 'From $50/month'
    },
    {
      id: 6,
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-centered design approach creating intuitive and engaging interfaces that enhance user experience and drive conversions.',
      features: [
        'Wireframing',
        'Prototyping',
        'User Research',
        'Design Systems'
      ],
      technologies: ['Figma', 'Adobe XD', 'User Testing', 'Design Principles'],
      price: 'Starting at $200'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We discuss your project requirements, goals, and timeline to create a detailed project plan.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes and prototypes to visualize the final product and gather feedback.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your project using the latest technologies and best practices in web development.'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Rigorous testing across devices and platforms followed by deployment and launch support.'
    }
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
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="services-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">My Services</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Comprehensive web development services to bring your ideas to life with modern technologies
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveService(index)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <span key={featureIndex} className="feature-tag">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="service-technologies">
                {service.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="service-price">{service.price}</div>

              <button className="service-cta">
                Get Started
                <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="process-section">
          <div className="process-header">
            <h3 className="process-title">My Development Process</h3>
            <p className="process-subtitle">
              A structured approach to ensure quality and timely delivery of your project
            </p>
          </div>

          <div className="process-steps">
            {process.map((step, index) => (
              <div
                key={step.step}
                className={`process-step ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="step-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`services-cta ${isVisible ? 'animate-in' : ''}`}>
          <div className="cta-content">
            <h3 className="cta-title">Ready to Start Your Project?</h3>
            <p className="cta-description">
              Let's discuss your ideas and create something amazing together. 
              I'm here to help you bring your vision to life.
            </p>
            <div className="cta-buttons">
              <button className="cta-btn primary">
                <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let's Discuss Your Project
              </button>
              <button className="cta-btn secondary">
                <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;