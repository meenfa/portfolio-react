import React, { useState } from 'react';
import { Github, ExternalLink, Link } from 'lucide-react';


const Blogs = () => {
  const [filter, setFilter] = useState("All");

  const blogss = [
    {
      title:
        "GitHub Student Developer Pack: Free Tools for Students",
      link: "https://karkiankit.hashnode.dev/how-to-get-your-free-github-student-pack-essential-tools-for-students",
      image: "/image/project/3.png",
    },
    {
      title:
        "The Interview That Taught Me More Than Any Course",
      link: "https://karkiankit.hashnode.dev/the-interview-that-taught-me-more-than-any-course",
      image: "/image/project/3.png",
    },
    {
      title:
        "Enhancing Assessment Security and Fairness in Learning Management Systems through Fisher-Yates Shuffle Algorithm",
      link: "https://lmsfisheryatesshuffledemopaper.karkiankit.com.np/",
      image: "/image/project/3.png",
    },

  ];


  return (
    <section id="blogs" className="py-16 bg-white pt-0">
      <div className="mx-auto px-2 max-w-2xl">
        <h2 className="text-xl font-bold text-black mb-4">Blogs</h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogss.map((blog, index) => (
            <div
              key={index}
              className="border-b border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-400 bg-white"
            >
              <div className="relative group">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover cursor-pointer border-y-stone-950"
                // onClick={() => project.link ? window.open(project.link, "_blank") : window.open(project.github, "_blank")}
                />

              </div>

              <div className="p-2">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-bold text-black">{blog.title}</h3>
                  {/* <div className="flex gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-black transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-800 hover:text-blue-800 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div> */}
                </div>

                {/* <p className="text-gray-700 text-sm mb-3 line-clamp-3 leading-relaxed">
                  {project.description}
                </p> */}
                {/* <div className="mb-2 flex flex-wrap gap-1">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>   */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blogs;