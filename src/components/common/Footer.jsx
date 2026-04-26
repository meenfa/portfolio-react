import { FaRegCopyright } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="py-10  bg-white mt-24">
    <div className="mx-auto px-2 max-w-2xl border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-gray-800 flex gap-2 items-center">
           <FaRegCopyright className="h-3 w-3"/>{new Date().getFullYear()} Ankit Karki
        </p>

        <p className="text-xs text-gray-800">
          Explore top developer portfolios for inspiration{" "}
          <a
            href="https://best-developers-portfolios.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-black transition-colors font-black"
          >
            here
          </a>
        </p>

      </div>
    </footer>
  );
};

export default Footer;