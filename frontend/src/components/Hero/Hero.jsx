import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
// import "./Hero.css";

const Hero = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/amirmesfin",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/amirmesfin",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/amirmesfin",
      label: "Twitter",
    },
    { icon: <FaEnvelope />, href: "mailto:amir@example.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900/20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary-400/30 shadow-2xl shadow-primary-500/20 animate-float">
            <img
              src="/images/profile.jpg"
              alt="Amir Mesfin"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-dark-100">Hello, I'm</span>
            <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent animate-fadeInUp">
              Amir Mesfin
            </span>
          </h1>

          {/* Animated Typewriter Text */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl text-dark-300 font-mono animate-typewriter">
              React Developer & UI/UX Enthusiast
            </h2>
          </div>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-dark-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            I create beautiful, functional, and user-centered digital
            experiences. Passionate about modern web technologies and bringing
            ideas to life through code.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#projects"
              className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-primary-400 text-primary-400 px-8 py-4 rounded-full font-semibold hover:bg-primary-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center space-x-6 animate-fadeInUp"
            style={{ animationDelay: "0.9s" }}
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="text-2xl text-dark-400 hover:text-primary-400 transform hover:-translate-y-1 transition-all duration-300 hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <a
          href="#about"
          className="text-dark-400 hover:text-primary-400 transition-colors"
        >
          <div className="w-6 h-10 border-2 border-dark-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-dark-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
