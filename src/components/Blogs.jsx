import React from "react";

const Blogs = () => {
  const blogss = [
    {
      title:
        "GitHub Student Developer Pack: Free Tools for Students",
      link: "https://karkiankit.hashnode.dev/how-to-get-your-free-github-student-pack-essential-tools-for-students",
    },
    {
      title:
        "The Interview That Taught Me More Than Any Course",
      link: "https://karkiankit.hashnode.dev/the-interview-that-taught-me-more-than-any-course",
     
    },
    {
      title:
        "Enhancing Assessment Security and Fairness in Learning Management Systems through Fisher-Yates Shuffle Algorithm",
      link: "https://lmsfisheryatesshuffledemopaper.karkiankit.com.np/",
     
    },
  ];

  return (
    <section id="blogs" className="py-16 bg-black pt-0">
      <div className="mx-auto px-2 max-w-3xl">
        <h2 className="text-2xl font-bold mb-2 text-white">Blogs</h2>
        <div className="space-y-6">
          {blogss.map((blog, index) => (
            <div
              key={index}
              className="p-0 transition"
            >
              <h className="font-noral text-base text-gray-200 text-wrap font-mono">
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {blog.title}
                </a>
              </h>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
