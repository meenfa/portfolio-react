import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MobileMenuButton } from './ui/MobileMenuButton';

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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {sections.map((section) => (
            <button
              key={section.name}
              onClick={() => handleNavClick(section)}
              className={`text-sm cursor-pointer ${location.pathname === section.path
                ? 'text-black border-b border-black'
                : 'text-gray-700 hover:text-black hover:border-b hover:border-gray-800'
                }`}
            >
              {section.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button - Updated */}
        <MobileMenuButton
          isOpen={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-20 left-8 right-10 bg-white rounded-base shadow-sm  transition-all duration-300 ease-in-out transform ${mobileMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
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
