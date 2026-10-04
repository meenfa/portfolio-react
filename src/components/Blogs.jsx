import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaBlogger } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
const Blogs = () => {
  const blogss = [
    {
      title: "GitHub Student Developer Pack: Free Tools for Students",
      link: "https://karkiankit.hashnode.dev/how-to-get-your-free-github-student-pack-essential-tools-for-students",
    },
    {
      title: "The Interview That Taught Me More Than Any Course",
      link: "https://karkiankit.hashnode.dev/the-interview-that-taught-me-more-than-any-course",
    },
    
  ];

  return (
    <section className="py-10 bg-white pt-0">
      <div className="mx-auto px-3 max-w-2xl">
        <h2 className="text-2xl font-extrabold mb-6 text-black">Blogs</h2>

        <div className="space-y-2">
          {blogss.map((blog, index) => (
            <a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-gray-700 rounded-lg bg-white 
               hover:bg-gray-100 
              transition-all duration-200 cursor-pointer group">

              <div className="flex items-center gap-2">
                <FaHashnode
                  className="text-gray-900 group-hover:text-gray-600 transition-colors duration-200 flex-shrink-0"
                />
                <h3 className="font-mono font-normal text-[15px] leading-snug text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                  {blog.title}
                </h3>

              {/* <TbLogs
                  className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200 flex-shrink-0 ml-3"
                /> */}
                
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
