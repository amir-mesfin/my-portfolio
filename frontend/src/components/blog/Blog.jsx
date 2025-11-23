import { useState, useEffect, useRef } from 'react';
import './Blog.css';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef(null);

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt: "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
      content: "React Hooks revolutionized how we write React components. In this post, we'll explore useState, useEffect, and custom hooks...",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      category: "react",
      readTime: "5 min read",
      date: "March 15, 2024",
      author: "Amir Mesfin",
      tags: ["React", "Hooks", "JavaScript"],
      featured: true
    },
    {
      id: 2,
      title: "Building Responsive Layouts with Tailwind CSS",
      excerpt: "Master the art of creating responsive designs using Tailwind CSS utility classes.",
      content: "Tailwind CSS makes responsive design incredibly straightforward. Let's dive into breakpoints, grid systems, and responsive utilities...",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      category: "css",
      readTime: "7 min read",
      date: "March 10, 2024",
      author: "Amir Mesfin",
      tags: ["Tailwind", "CSS", "Responsive"],
      featured: false
    },
    {
      id: 3,
      title: "Node.js Best Practices for API Development",
      excerpt: "Essential tips and best practices for building robust and scalable Node.js APIs.",
      content: "Building APIs with Node.js requires attention to security, performance, and maintainability. Here are the best practices I've learned...",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
      category: "nodejs",
      readTime: "8 min read",
      date: "March 5, 2024",
      author: "Amir Mesfin",
      tags: ["Node.js", "API", "Backend"],
      featured: true
    },
    {
      id: 4,
      title: "MongoDB Aggregation Pipeline Explained",
      excerpt: "Deep dive into MongoDB aggregation framework for complex data processing.",
      content: "The aggregation pipeline is one of MongoDB's most powerful features. Learn how to transform and analyze your data effectively...",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1768&q=80",
      category: "database",
      readTime: "6 min read",
      date: "February 28, 2024",
      author: "Amir Mesfin",
      tags: ["MongoDB", "Database", "Aggregation"],
      featured: false
    },
    {
      id: 5,
      title: "Modern JavaScript ES6+ Features You Should Know",
      excerpt: "Explore the most useful ES6+ features that every JavaScript developer should master.",
      content: "JavaScript has evolved significantly with ES6 and beyond. Let's explore arrow functions, destructuring, modules, and more...",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      category: "javascript",
      readTime: "10 min read",
      date: "February 20, 2024",
      author: "Amir Mesfin",
      tags: ["JavaScript", "ES6", "Modern JS"],
      featured: false
    },
    {
      id: 6,
      title: "Deploying MERN Stack Applications to Production",
      excerpt: "A complete guide to deploying your MERN stack applications with best practices.",
      content: "Taking your MERN application from development to production involves several important steps. Here's my deployment checklist...",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
      category: "deployment",
      readTime: "12 min read",
      date: "February 15, 2024",
      author: "Amir Mesfin",
      tags: ["MERN", "Deployment", "Production"],
      featured: true
    }
  ];

  const categories = [
    { name: 'All Posts', category: 'all' },
    { name: 'React', category: 'react' },
    { name: 'JavaScript', category: 'javascript' },
    { name: 'Node.js', category: 'nodejs' },
    { name: 'CSS', category: 'css' },
    { name: 'Database', category: 'database' },
    { name: 'Deployment', category: 'deployment' },
    { name: 'Featured', category: 'featured' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'featured') return post.featured;
    return post.category === activeCategory;
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
    <section id="blog" className="blog-section" ref={sectionRef}>
      <div className="blog-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">My Blog</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Thoughts, tutorials, and insights about web development, programming, and technology
          </p>
        </div>

        {/* Category Filters */}
        <div className={`category-filters ${isVisible ? 'animate-in' : ''}`}>
          {categories.map((category) => (
            <button
              key={category.category}
              className={`filter-btn ${activeCategory === category.category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.category)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="blog-grid">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className={`blog-card ${isVisible ? 'animate-in' : ''} ${post.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Post Image */}
              <div className="post-image-container">
                <img
                  src={post.image}
                  alt={post.title}
                  className="post-image"
                />
                <div className="post-overlay">
                  <div className="read-more-btn">
                    Read More
                    <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                {post.featured && (
                  <div className="featured-badge">
                    <span>⭐ Featured</span>
                  </div>
                )}
              </div>

              {/* Post Content */}
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-category">{post.category}</span>
                  <span className="post-date">{post.date}</span>
                  <span className="read-time">{post.readTime}</span>
                </div>

                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>

                {/* Tags */}
                <div className="post-tags">
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Author Info */}
                <div className="author-info">
                  <div className="author-avatar">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                      alt={post.author}
                    />
                  </div>
                  <div className="author-details">
                    <span className="author-name">{post.author}</span>
                    <span className="author-role">Web Developer</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className={`newsletter-section ${isVisible ? 'animate-in' : ''}`}>
          <div className="newsletter-container">
            <div className="newsletter-content">
              <h3 className="newsletter-title">Stay Updated</h3>
              <p className="newsletter-description">
                Get the latest posts and tutorials delivered straight to your inbox. No spam, just quality content.
              </p>
              <form className="newsletter-form">
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="newsletter-input"
                    required
                  />
                  <button type="submit" className="subscribe-btn">
                    Subscribe
                    <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`blog-cta ${isVisible ? 'animate-in' : ''}`}>
          <h3 className="cta-title">Want to collaborate or have questions?</h3>
          <p className="cta-description">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="cta-btn primary">
              Get In Touch
            </a>
            <a href="#portfolio" className="cta-btn secondary">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;