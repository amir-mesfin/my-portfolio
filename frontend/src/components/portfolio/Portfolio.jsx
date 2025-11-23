import { useState, useEffect, useRef } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Mam Restaurant",
      description: "A modern restaurant website with online ordering system, menu management, and reservation features. Built with React and Node.js.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      liveUrl: "https://mam-restaurant.netlify.app",
      githubUrl: "#", // Private repo
      featured: true
    },
    {
      id: 2,
      title: "Abushe Estate",
      description: "A comprehensive real estate platform featuring property listings, advanced search filters, and user authentication system.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      category: "fullstack",
      liveUrl: "https://abushe-real-state.netlify.app/",
      githubUrl: "https://github.com/amir-mesfin/realestate-mern",
      featured: true
    },
    {
      id: 3,
      title: "DessieMart",
      description: "An e-commerce platform for local businesses in Dessie, featuring shopping cart, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      technologies: ["React", "Firebase", "CSS3", "JavaScript"],
      category: "frontend",
      liveUrl: "https://dessiemart.netlify.app",
      githubUrl: "https://github.com/amir-mesfin/DessieMart-",
      featured: false
    },
    {
      id: 4,
      title: "Dessie Movie Center",
      description: "A movie streaming platform with video player, user profiles, and content recommendations. Features modern UI/UX design.",
      image: "https://images.unsplash.com/photo-1489599809505-7c6f0bd6d3e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      technologies: ["React", "API Integration", "CSS3", "JavaScript"],
      category: "frontend",
      liveUrl: "https://dessiemoviecenter.netlify.app",
      githubUrl: "https://github.com/amir-mesfin/Movie-Streaming-App",
      featured: false
    },
    {
      id: 5,
      title: "Static Social Media",
      description: "A practice project replicating social media UI with posts, comments, and user interactions. Focus on frontend development.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      category: "frontend",
      liveUrl: "https://static-socialmedia.netlify.app",
      githubUrl: "#",
      featured: false
    }
  ];

  const filters = [
    { name: 'All Projects', category: 'all' },
    { name: 'Full Stack', category: 'fullstack' },
    { name: 'Frontend', category: 'frontend' },
    { name: 'Featured', category: 'featured' }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

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
    <section id="portfolio" className="portfolio-section" ref={sectionRef}>
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">My Portfolio</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Explore my latest projects and creative works in web development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`filter-buttons ${isVisible ? 'animate-in' : ''}`}>
          {filters.map((filter) => (
            <button
              key={filter.category}
              className={`filter-btn ${activeFilter === filter.category ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.category)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-actions">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn live-demo"
                    >
                      <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                    {project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn source-code"
                      >
                        <svg className="btn-icon" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
                {project.featured && (
                  <div className="featured-badge">
                    <span>⭐ Featured</span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {/* Technologies */}
                <div className="technologies-list">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg className="link-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Live
                  </a>
                  {project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg className="link-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`portfolio-cta ${isVisible ? 'animate-in' : ''}`}>
          <h3 className="cta-title">Interested in working together?</h3>
          <p className="cta-description">
            I'm always open to discussing new opportunities and creative projects.
          </p>
          <a href="#contact" className="cta-button">
            Let's Talk
            <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;