import React, { useState } from 'react';
import { Github, Linkedin, Download } from 'lucide-react';

const Navbar = ({ activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 h-16">
      <div className="mx-auto px-2 max-w-3xl h-full">
        <div className="flex justify-between items-center h-full">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <span className="text-xl font-bold text-white">अंकित.</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {['about', 'skills', 'experience', 'projects', 'education', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium cursor-pointer transition-colors ${
                  activeSection === section ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative z-50 p-3 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-800/30 active:scale-95"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 relative">
                {/* Animated hamburger lines */}
                <span
                  className={`hamburger-line absolute block h-0.5 w-6 bg-current transform ${
                    mobileMenuOpen 
                      ? 'rotate-45 translate-y-2.5 bg-white' 
                      : 'translate-y-1 bg-white'
                  }`}
                />
                <span
                  className={`hamburger-line absolute block h-0.5 w-6 bg-current transform translate-y-2.5 ${
                    mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100 bg-white'
                  }`}
                />
                <span
                  className={`hamburger-line absolute block h-0.5 w-6 bg-current transform ${
                    mobileMenuOpen 
                      ? '-rotate-45 translate-y-2.5 bg-white' 
                      : 'translate-y-4 bg-white'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-lg border-t border-gray-800 transform transition-all duration-300 ease-in-out ${
        mobileMenuOpen 
          ? 'opacity-100 translate-y-0 visible' 
          : 'opacity-0 -translate-y-4 invisible'
      }`}>
        <div className="px-6 py-6 space-y-1">
          {['about', 'skills', 'experience', 'projects', 'education', 'contact'].map((section, index) => (
            <button
              key={section}
              onClick={() => {
                scrollToSection(section);
                setMobileMenuOpen(false);
              }}
              className={`mobile-menu-item group block w-full text-left py-4 px-5 rounded-xl text-base font-medium transition-all duration-300 ease-in-out transform hover:translate-x-2 hover:scale-[1.02] ${
                activeSection === section 
                  ? 'text-white bg-gradient-to-r from-gray-800/80 to-gray-700/60 border-l-4 border-white shadow-lg' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/40'
              }`}
              style={{
                animationDelay: mobileMenuOpen ? `${index * 80}ms` : '0ms',
                animation: mobileMenuOpen ? 'slideInLeft 0.4s ease-out forwards' : 'none'
              }}
            >
              <span className="flex items-center justify-between">
                <span className="capitalize font-semibold tracking-wide">{section}</span>
                <div className="flex items-center space-x-2">
                  {activeSection === section && (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                  <svg 
                    className={`w-4 h-4 transition-all duration-300 transform ${
                      activeSection === section 
                        ? 'text-white rotate-90' 
                        : 'text-gray-600 group-hover:text-gray-400 group-hover:translate-x-1'
                    }`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </span>
            </button>
          ))}
          
          {/* Mobile menu footer */}
          <div className="pt-8 mt-8 border-t border-gray-800">
            <div className="text-center mb-4">
              <p className="text-gray-500 text-sm">Connect with me</p>
            </div>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/ankitkarki27"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-xl bg-gray-800/60 text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95"
              >
                <Github className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              </a>
              <a
                href="https://www.linkedin.com/in/ankitkarki27/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-xl bg-gray-800/60 text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95"
              >
                <Linkedin className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              </a>
              <a
                href="https://drive.google.com/file/d/1AKVjMhslY9VcN4BhHj-zNeWb0OaDqnP9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-xl bg-gray-800/60 text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95"
              >
                <Download className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              </a>
            </div>
            <div className="text-center mt-6">
              <span className="text-gray-500 text-xs font-medium">© 2025 Ankit Karki</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
