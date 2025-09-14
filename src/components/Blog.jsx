import React from "react";

const Blog = () => {
  const blogs = [
    {
      title:
        "Enhancing Assessment Security and Fairness in Learning Management Systems through Fisher-Yates Shuffle Algorithm",
      link: "https://lmsfisheryatesshuffledemopaper.karkiankit.com.np/",
     
    },
    {
      title: "How to Integrate Tailwind CSS v4 in React Vite Project",
      link: "https://lmsfisheryatesshuffledemopaper.karkiankit.com.np/",
    },
  ];

  return (
    <section id="blog" className="py-16 bg-white pt-2">
      <div className="mx-auto px-2 max-w-3xl">
        <h2 className="text-2xl font-bold mb-2 text-black">Writings</h2>
        <div className="space-y-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="p-0  transition"
            >
              <hp className="font-noral text-sm text-gray-700 text-wrap ">
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {blog.title}
                </a>
              </hp>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
