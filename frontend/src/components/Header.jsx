import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check system preference or saved theme
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact', 'Blog'];

  const handleNavClick = (item) => {
    setActiveLink(item);
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`
        fixed top-0 left-0 w-full 
        transition-all duration-500 ease-out
        z-50
        ${isScrolled ? 'header-scrolled' : 'header-top'}
      `}
    >
      {/* Background Blur Layer */}
      <div className="header-background"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <div className="logo-container group">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="logo-animated">
                <div className="logo-dot-animated"></div>
                <div className="logo-bar-animated"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400">
                Abushe
              </span>
            </div>
            <div className="logo-glow"></div>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`
                    nav-link-item
                    ${activeLink === item ? 'nav-link-active' : 'nav-link-inactive'}
                  `}
                  style={{ '--i': index }}
                  onClick={() => handleNavClick(item)}
                >
                  <span className="nav-link-text">{item}</span>
                  <span className="nav-link-underline"></span>
                </a>
              ))}
            </div>

            {/* Dark Mode Toggle - Desktop */}
            <button
              onClick={toggleDarkMode}
              className="theme-toggle-btn group"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <div className="theme-toggle-track">
                <div className={`theme-icon sun-icon ${!isDarkMode ? 'active' : ''}`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <div className={`theme-icon moon-icon ${isDarkMode ? 'active' : ''}`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                </div>
                
                <div className={`theme-knob ${isDarkMode ? 'dark' : 'light'}`}></div>
              </div>
            </button>

            {/* CTA Button - Desktop */}
            <button className="cta-btn-primary group">
              <span className="cta-text">Get Started</span>
              <div className="cta-arrow-wrapper">
                <svg className="w-4 h-4 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <div className="cta-shine"></div>
            </button>
          </nav>

          {/* Mobile Controls - Visible only on mobile */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* CTA Button - Mobile (Simplified) */}
            <button className="cta-btn-mobile group">
              <span>Start</span>
            </button>

            {/* Dark Mode Toggle - Mobile */}
            <button
              onClick={toggleDarkMode}
              className="theme-toggle-mobile group"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className={`
                mobile-menu-btn
                ${isMobileMenuOpen ? 'menu-open' : ''}
              `}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="menu-line"></span>
              <span className="menu-line"></span>
              <span className="menu-line"></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Full screen overlay */}
        <div className={`
          lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out
          ${isMobileMenuOpen ? 'mobile-nav-open' : 'mobile-nav-closed'}
        `}>
          {/* Backdrop */}
          <div 
            className="mobile-nav-backdrop"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Navigation Panel */}
          <div className="mobile-nav-panel">
            {/* Close Button */}
            <div className="mobile-nav-header">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-close-btn"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="mobile-nav-content">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`
                    mobile-nav-link
                    ${activeLink === item ? 'mobile-nav-link-active' : ''}
                  `}
                  style={{ '--delay': index }}
                  onClick={() => handleNavClick(item)}
                >
                  <span className="mobile-link-text">{item}</span>
                  <div className="mobile-link-bg"></div>
                  <div className="mobile-link-arrow">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </nav>

            {/* Mobile Footer with CTA */}
            <div className="mobile-nav-footer">
              <button className="mobile-cta-btn">
                Get Started Free
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <p className="mobile-footer-text">
                Start your journey today
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;