import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import PageFade from "../ui/motion/PageFade";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar />
      <PageFade>
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="max-w-2xl w-full">
            <p className="text-sm text-gray-500 mb-2">404 Error</p>

            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Page not found
            </h1>

            <p className="text-gray-600 text-lg md:text-lg mb-6 max-w-md">
              The page you’re looking for doesn’t exist or may have been moved.
            </p>

            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-black hover:text-gray-600 transition"
            >
              Back to home
            </Link>
          </div>
        </main>
      </PageFade>
      <Footer />
    </div>
  );
};

export default PageNotFound;