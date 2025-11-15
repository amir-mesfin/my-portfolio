import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaMobile } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";
// import "./About.css";

const About = () => {
  const skills = [
    { icon: <FaReact />, name: "React", level: 90 },
    { icon: <SiJavascript />, name: "JavaScript", level: 85 },
    { icon: <SiTypescript />, name: "TypeScript", level: 80 },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", level: 95 },
    { icon: <FaNodeJs />, name: "Node.js", level: 75 },
    { icon: <FaDatabase />, name: "Database", level: 70 },
    { icon: <FaMobile />, name: "Responsive Design", level: 90 },
  ];

  return (
    <section id="about" className="py-20 bg-dark-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-dark-100">About </span>
              <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-500 mx-auto mb-6"></div>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Get to know more about my journey, skills, and what drives me as a
              developer
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-dark-100 mb-4">
                Crafting Digital Experiences That Matter
              </h3>

              <p className="text-dark-300 leading-relaxed">
                Hello! I'm Amir Mesfin, a passionate React developer with a keen
                eye for creating engaging user interfaces and exceptional user
                experiences. I love turning complex problems into simple,
                beautiful designs.
              </p>

              <p className="text-dark-300 leading-relaxed">
                My journey in web development started 3 years ago, and since
                then I've been constantly learning and evolving with the latest
                technologies. I believe in writing clean, efficient code and
                creating products that provide real value to users.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-dark-700/50 p-4 rounded-lg border-l-4 border-primary-400">
                  <h4 className="font-semibold text-dark-100 mb-2">
                    Experience
                  </h4>
                  <p className="text-primary-400 font-bold">3+ Years</p>
                  <p className="text-dark-400 text-sm">Web Development</p>
                </div>
                <div className="bg-dark-700/50 p-4 rounded-lg border-l-4 border-accent-400">
                  <h4 className="font-semibold text-dark-100 mb-2">Projects</h4>
                  <p className="text-accent-400 font-bold">20+</p>
                  <p className="text-dark-400 text-sm">Completed</p>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-dark-700/30 p-4 rounded-xl border border-dark-600 hover:border-primary-400/30 transition-all duration-300 group hover:transform hover:-translate-y-1"
                >
                  <div className="flex items-center mb-3">
                    <div className="text-2xl text-primary-400 mr-3 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-dark-100">
                      {skill.name}
                    </span>
                  </div>
                  <div className="w-full bg-dark-600 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-400 to-accent-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-xs text-dark-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
