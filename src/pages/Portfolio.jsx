import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Blogs from '../components/Blogs';
import { useNavigate } from 'react-router-dom';
import About from '../components/About';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['work', 'projects', 'education', 'blogs'].includes(hash)) {
        setActiveSection(hash);
        scrollToSection(hash);
      }
    };

    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
      setTimeout(() => scrollToSection(hash), 100);
    }

    // Scroll to top button visibility
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    }; window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (sectionId) => {
    window.location.hash = sectionId;
    scrollToSection(sectionId);
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
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 h-20">
      <div className="mx-auto px-2 sm:px-2 max-w-2xl h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-xl font-normal text-black">Ankit Karki</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {['work', 'projects', 'blogs'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`text-sm cursor-pointer transition-colors duration-600 ${activeSection === section
                  ? 'text-black border-b-2 border-gray-900 font-medium'
                  : 'text-gray-7  00 hover:text-black hover:border-b-2 hover:border-gray-400'
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
          className={`md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-300 shadow-lg transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
          <div className="px-6 py-4 space-y-1">
            {['work', 'projects', 'blogs'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`block w-full text-left py-3 px-4 text-sm font-medium rounded-lg transition-all cursor-pointer duration-200 ${activeSection === section
                  ? 'bg-gray-300 text-gray-900 border-l-4 border-white'
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
      <Hero />

      <Experience />
      <Skills />
      <Projects />
      {/* <About /> */}
      <Blogs />

      <Contact />
      <Footer />
    </div>
    
  </div>
);
};

export default Portfolio;
