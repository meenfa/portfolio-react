import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MobileMenuButton } from '../ui/MobileMenuButton';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const sections = [
    { name: 'Projects', path: '/projects' },
    { name: 'Work', path: '/work' },
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 w-full bg-white/30 backdrop-blur-lg z-50 h-16">
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

        <div className="hidden md:flex items-center space-x-4">
          {sections.map((section) => (
            <button
              key={section.name}
              onClick={() => handleNavClick(section)}
              className={`text-sm cursor-pointer ${location.pathname === section.path
                ? 'text-black border-b border-black'
                : 'text-gray-800 hover:text-black hover:border-b-2 hover:border-gray-800'
                }`}
            >
              {section.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <MobileMenuButton
          isOpen={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
      </div>

      {/* Professional Mobile Dropdown Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-white shadow-xl transition-all duration-300 ease-in-out transform ${
          mobileMenuOpen 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-full opacity-0 invisible'
        }`}
        style={{ height: 'auto', maxHeight: 'calc(100vh - 4rem)' }}
      >
        {/* Menu Header with subtle gradient */}
        {/* <div className="bg-gradient-to-r from-gray-50 to-white px-6 py-4 border-b border-gray-100">
          <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
            Navigation
          </p>
        </div> */}

        {/* Menu Items */}
        <div className="py-2">
          {sections.map((section, index) => (
            <button
              key={section.name}
              onClick={() => handleNavClick(section)}
              className={`w-full group relative transition-all duration-200 ${
                index !== sections.length - 1 ? 'border-b border-gray-50' : ''
              }`}
            >
              <div className={`flex items-center justify-between px-6 py-4 transition-colors duration-200 ${
                location.pathname === section.path
                  ? 'bg-gray-50'
                  : 'hover:bg-gray-50'
              }`}>
                <div className="flex flex-col items-start">
                  <span className={`text-base font-medium transition-colors duration-200 ${
                    location.pathname === section.path
                      ? 'text-black'
                      : 'text-gray-700 group-hover:text-black'
                  }`}>
                    {section.name}
                  </span>
                  {/* Subtle indicator line */}
                  <div className={`h-0.5 bg-black transition-all duration-300 ${
                    location.pathname === section.path 
                      ? 'w-6 opacity-100' 
                      : 'w-0 opacity-0 group-hover:w-4 group-hover:opacity-100'
                  }`} />
                </div>
                
                {/* Arrow icon for visual feedback */}
                <svg 
                  className={`w-4 h-4 transition-all duration-200 ${
                    location.pathname === section.path
                      ? 'text-black translate-x-1'
                      : 'text-gray-400 group-hover:text-black group-hover:translate-x-1'
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Optional: Footer with additional info */}
        <div className="border-t border-gray-100 px-6 py-4 bg-gray-50/50">
          <p className="text-xs text-gray-400 text-center">
            Let's create something amazing
          </p>
        </div>
      </div>

      {/* Backdrop overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300 ${
          mobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
        style={{ top: '4rem', zIndex: 40 }}
        onClick={() => setMobileMenuOpen(false)}
      />
    </nav>
  );
};

export default Navbar;