import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const sections = [
    { name: 'Projects', path: '/projects' },
    { name: 'Work', path: '/work-experience' },
    { name: 'Blogs', path: '/blogs' },
  ];

  const handleNavClick = (section) => {
    if (location.pathname !== section.path) {
      navigate(section.path);
    }
    setMobileMenuOpen(false);
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
    <nav className="fixed top-0 w-full bg-white/30 backdrop-blur-lg z-70 h-20">
      <div className="mx-auto px-2 max-w-2xl h-full flex justify-between items-center">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              navigate('/');
            }
          }}
        >
          <span className="text-xl font-bold text-black">Ankit Karki</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {sections.map((section) => (
            <button
              key={section.name}
              onClick={() => handleNavClick(section)}
              className={`text-sm cursor-pointer transition-all duration-300 ${location.pathname === section.path
                  ? 'text-black border-b border-black font-medium'
                  : 'text-gray-900 hover:text-black hover:border-b-2 hover:border-black'
                }`}
            >
              {section.name}
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
            className="p-2 flex items-center justify-center text-black hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {/* Animated Hamburger */}
            <span className="relative w-6 h-6">
              <span
                className={`block absolute h-0.5 w-full bg-black transform transition duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45 top-2.5' : 'top-1'
                  }`}
              />
              <span
                className={`block absolute h-0.5 w-full bg-black transform transition duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'top-3'
                  }`}
              />
              <span
                className={`block absolute h-0.5 w-full bg-black transform transition duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45 top-2.5' : 'top-5'
                  }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-20 left-4 right-4 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${mobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="flex flex-col py-2">
          {sections.map((section) => (
            <button
              key={section.name}
              onClick={() => handleNavClick(section)}
              className={`w-full text-left py-3 px-4 text-sm font-medium transition-all duration-300 rounded-md ${location.pathname === section.path
                  ? 'bg-gray-100 text-black font-semibold'
                  : 'text-gray-700 hover:text-black hover:bg-gray-50'
                }`}
            >
              {section.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
