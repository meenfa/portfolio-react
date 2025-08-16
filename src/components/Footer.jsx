import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-4 text-gray-400">
      <div className="mx-auto px-6 text-center text-xs max-w-3xl">
        © {new Date().getFullYear()} Ankit Karki. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
