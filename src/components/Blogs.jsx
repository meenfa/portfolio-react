import React from "react";
import { blogs } from "../components/data/blogsData";
import BlogCard from "../components/ui/BlogCard";

const Blogs = () => {
  return (
    <section className="py-10 bg-white pt-0">
      <div className="mx-auto px-3 max-w-2xl">
        <h2 className="text-2xl font-bold mb-2 text-black">
          
          Blogs
        </h2>

        <div className="space-y-0">
          {[...blogs].reverse().map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              slug={blog.slug}
              createdOn={blog.createdOn}
              readTime={blog.readTime}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;