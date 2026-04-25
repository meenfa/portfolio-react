const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-10 bg-white mt-24">
      <div className="mx-auto px-6 max-w-4xl flex flex-col md:flex-row items-center justify-between gap-3">
        
        <p className="text-xs text-gray-800">
          © {new Date().getFullYear()} Ankit Karki
        </p>

        <p className="text-xs text-gray-800">
          Explore top developer portfolios for inspiration{" "}
          <a
            href="https://best-developers-portfolios.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-black transition-colors"
          >
            here
          </a>
        </p>

      </div>
    </footer>
  );
};

export default Footer;