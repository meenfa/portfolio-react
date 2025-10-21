const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-6 text-black bg-white mt-12">
      <div className="mx-auto px-6 max-w-3xl">
        <div className="text-center space-y-2">
          {/* Copyright */}
          <p className="text-base font-medium">
            © {new Date().getFullYear()} Ankit Karki. All rights reserved.
          </p>
          
          {/* Portfolio link section */}
          <div className="text-sm text-gray-600">
            <span>Find best developers portfolios here for your inspiration. </span>
            <a 
              href="https://best-developers-portfolios.vercel.app/" 
              className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;