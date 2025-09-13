import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 h-16 border-b border-gray-200">
        <div className="mx-auto px-2 max-w-3xl h-full">
          <div className="flex justify-between items-center h-full">
            <Link to="/" className="flex items-center cursor-pointer">
              <span className="text-xl font-bold text-black">अंकित.</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              {['/', '/skills', '/experience', '/projects', '/education', '/contact'].map((path) => (
                <Link
                  key={path}
                  to={path}
                  className={`text-sm font-medium cursor-pointer transition-colors ${location.pathname === path ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                >
                  {path === '/' ? 'About' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-12">
        {children}
      </div>

      <footer className="border-t border-gray-300 py-4 text-gray-500 bg-white">
        <div className="mx-auto px-6 text-center text-xs max-w-3xl">
          © {new Date().getFullYear()} Ankit Karki. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;