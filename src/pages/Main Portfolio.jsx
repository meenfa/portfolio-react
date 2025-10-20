import React, { useState, useEffect } from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Blogs from '../components/Blogs';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['about', 'experience', 'projects', 'education', 'contact', 'blogs'].includes(hash)) {
        setActiveSection(hash);
        scrollToSection(hash);
      }
    };

    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
      setTimeout(() => scrollToSection(hash), 100);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      window.history.replaceState(null, null, `#${sectionId}`);
    }
    setMobileMenuOpen(false);
  };

  const handleNavClick = (sectionId) => {
    if (sectionId === 'poetry') {
      // navigate to poetry route
      window.location.href = '/poetry';
    } else {
      window.location.hash = sectionId;
      scrollToSection(sectionId);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('nav')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="fixed top-0 w-full bg-white backdrop-blur-md z-50 h-16">
        <div className="mx-auto px-2 sm:px-2 max-w-3xl h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleNavClick('about')}
            >
              <span className="text-xl font-bold text-black">अंकित.</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['about', 'experience', 'projects', 'blogs', 'contact', 'poetry'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className={`text-base font-medium cursor-pointer transition-colors duration-600 ${
                    activeSection === section
                      ? 'text-black border-b-2 border-black'
                      : 'text-gray-500 hover:text-black hover:border-b-2 hover:border-gray-400'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="p-2 text-black hover:text-gray-900 transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <div
            className={`md:hidden absolute top-16 left-0 w-full bg-black border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <div className="px-6 py-4 space-y-1">
              {['about', 'experience', 'projects', 'blogs', 'contact', 'poetry'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className={`block w-full text-left py-3 px-4 text-sm font-medium rounded-lg transition-all cursor-pointer duration-200 ${
                    activeSection === section
                      ? 'bg-gray-900 text-gray-200 border-l-4 border-white'
                      : 'text-gray-600 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Blogs />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
