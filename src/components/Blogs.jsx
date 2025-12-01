import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

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
    {
      title:
        "Enhancing Assessment Security in LMS using Fisher-Yates Shuffle Algorithm",
      link: "https://lmsfisheryatesshuffledemopaper.karkiankit.com.np/",
    },
  ];

  return (
    <section id="blogs" className="py-10 bg-white pt-0">
      <div className="mx-auto px-3 max-w-2xl">
        <h2 className="text-xl font-bold mb-6 text-black">Blogs</h2>

        <div className="space-y-3">
          {blogss.map((blog, index) => (
            <a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-gray-200 rounded-lg bg-white 
               hover:bg-gray-50 hover:shadow-md
              transition-all duration-200 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-normal text-[15px] leading-snug text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                  {blog.title}
                </h3>

                <FiArrowUpRight
                  className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200 flex-shrink-0 ml-3"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
