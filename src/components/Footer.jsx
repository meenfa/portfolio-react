const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-4 text-black bg-white mt-12">
      <div className="mx-auto px-6 text-center text-base max-w-3xl">
        © {new Date().getFullYear()} Ankit Karki. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
