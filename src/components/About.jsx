import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Download, Github, Linkedin } from 'lucide-react';

const About = ({ activeSection, scrollToSection }) => {
  const [countersStarted, setCountersStarted] = useState(false);

  // Counter animation effect
  useEffect(() => {
    const animateCounters = () => {
      const counters = document.querySelectorAll('.counter');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const suffix = counter.textContent.includes('+') ? '+' : '';
        let current = 0;
        const increment = target / 30; // Animation duration control
        
        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current) + suffix;
            setTimeout(updateCounter, 50);
          } else {
            counter.textContent = target + suffix;
          }
        };
        
        updateCounter();
      });
    };

    // Intersection Observer for triggering animation when stats come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !countersStarted) {
          setCountersStarted(true);
          animateCounters();
        }
      });
    }, { threshold: 0.5 });

    const statsElement = document.querySelector('.stats-container');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => {
      if (statsElement) {
        observer.unobserve(statsElement);
      }
    };
  }, [countersStarted]);

  // Section style with scroll-margin to account for fixed navbar
  const sectionStyle = {
    scrollMarginTop: '4rem'
  };

  return (
    <section
      id="about"
      style={sectionStyle} 
      className="flex items-center min-h-[calc(100vh-4rem)]"
    >
      <div className="mx-auto px-2 py-16 w-full max-w-3xl">
        <div className="space-y-8">
          {/* Name/Title and Image Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
            {/* Name and Title */}
            <div className="space-y-3 flex-1 order-2 sm:order-1">
              <h1 className="hero-name text-4xl sm:text-3xl font-bold text-white tracking-tight">Ankit Karki</h1>
              <p className="hero-role text-xl sm:text-lg text-gray-400 font-medium">Backend Developer</p>

              {/* Contact Info */}
              <div className="hero-contact flex flex-wrap gap-4 items-center pt-3">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">ankitkarki8088@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">Kathmandu, Nepal</span>
                </div>
              </div>
            </div>

            {/* Image Container with Floating Tech Badges - Hidden on mobile */}
            <div className="hidden sm:block hero-image relative order-1 sm:order-2 mx-auto sm:mx-0 sm:pl-2">
              <img
                src="/image/image.png"
                alt="Ankit Karki"
                className="w-32 h-32 sm:w-40 sm:h-24 object-cover rounded-xl shadow-2xl border-2 border-gray-700/50 backdrop-blur-sm"
              />

              {/* Floating Status Badge - Available on desktop only */}
              <div className="absolute -top-3 -right-3 z-20">
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg flex items-center space-x-2 animate-bounce">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  <span>Available</span>
                </div>
              </div>

              {/* Floating Tech Badges with Animation - Responsive positioning */}
              <div className="absolute -top-2 -left-6 sm:-top-3 sm:-left-8 animate-float-vertical">
                <span className="px-2 py-1 bg-black/90 text-white font-mono rounded-lg border border-gray-700 text-xs shadow-lg backdrop-blur-sm">
                  Django
                </span>
              </div>

              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-2 animate-float-vertical" style={{ animationDelay: '0.5s' }}>
                <span className="px-2 py-1 bg-black/90 text-white font-mono rounded-lg border border-gray-700 text-xs shadow-lg backdrop-blur-sm">
                  Laravel
                </span>
              </div>

              <div className="absolute -bottom-2 -left-4 sm:-bottom-3 sm:-left-3 animate-float-horizontal-reverse">
                <span className="px-2 py-1 bg-black/90 text-white text-xs font-mono rounded-lg border border-gray-700 shadow-lg backdrop-blur-sm">
                  React
                </span>
              </div>
              <div className="absolute -bottom-2 -right-4 sm:-bottom-3 sm:-right-3 animate-float-vertical-reverse" style={{ animationDelay: '1s' }}>
                <span className="px-2 py-1 bg-black/90 text-white text-xs font-mono rounded-lg border border-gray-700 shadow-lg backdrop-blur-sm">
                  Python
                </span>
              </div>
            </div>
          </div>

          {/* Available Badge for Mobile */}
          <div className="sm:hidden flex justify-center">
            <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center space-x-2 animate-bounce">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>Available for Work</span>
            </div>
          </div>

          {/* Bio Text */}
          <div className="hero-bio space-y-4 text-gray-400 pt-6">
            <p className="text-lg leading-relaxed">
              Hi, I'm Ankit, a passionate <span className="text-white font-semibold">Junior Backend Developer</span> with very good knowledge in
              <span className="text-white font-semibold"> Django, Python, Laravel</span> and building scalable web applications.
            </p>
            <p className="leading-relaxed">
              My focus is on developing efficient APIs, optimizing database performance, and implementing
              secure authentication systems.
            </p>
            <p className="leading-relaxed">
              Currently working on <span className="text-gray-200 font-semibold hover:text-white transition-colors">
              <a href="https://github.com/ankitkarki27/eLearning-Platform-django-react" target="_blank" rel="noopener noreferrer">
                Padhai LMS platform
              </a></span>, where I lead both backend and frontend development. I'm also interested in exploring new technologies and contributing to open-source projects.
            </p>
          </div>

          {/* Buttons */}
          <div className="hero-buttons flex flex-wrap gap-4 pt-6">
            <a
              href="https://drive.google.com/file/d/1n6NuJ5loxjVnWV7ceX51WiAh8tSvoxCT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-black hover:bg-gray-200 px-6 py-3 rounded-lg text-white hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium border border-gray-700"
            >
              <Download className="w-4 h-4 transition-transform group-hover:rotate-12" />
              <span>Download Resume</span>
            </a>

            <a
              href="https://github.com/ankitkarki27"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-300 border border-gray-700 transform hover:scale-110"
            >
              <Github className="w-5 h-5 transition-transform group-hover:rotate-12" />
            </a>

            <a
              href="https://www.linkedin.com/in/ankitkarki27/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-300 border border-gray-700 transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5 transition-transform group-hover:rotate-12" />
            </a>
          </div>

          {/* Stats */}
          <div className="stats-container grid grid-cols-3 gap-6 pt-6 border-t border-gray-800">
            <div className="text-center">
              <div className="text-2xl font-bold text-white counter" data-target="7">0+</div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white counter" data-target="6">0</div>
              <div className="text-sm text-gray-400">Months+ Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white counter" data-target="8">0+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
