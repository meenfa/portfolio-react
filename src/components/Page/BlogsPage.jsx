import React from "react";
import { blogs } from "../data/blogsData";
import BlogCard from "../ui/BlogCard";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import PageFade from "../ui/motion/PageFade";

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <PageFade>
        <header className="py-8 pt-24">
          <div className="mx-auto px-2 max-w-2xl">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              Blogs
            </h1>

            <p className="text-gray-700 text-sm md:text-lg">
              Read my latest blogs and writings
            </p>
          </div>
        </header>
        <section className="py-4 bg-white">
          <div className="mx-auto px-3 max-w-2xl">
            <div className="space-y-0">
              {blogs.map((blog, index) => (
                <BlogCard
                  key={index}
                  title={blog.title}
                  createdOn={blog.createdOn}
                  slug={blog.slug}
                  readTime={blog.readTime}
                />
              ))}
            </div>
          </div>
        </section>
      </PageFade>
      <Footer />
    </div>
  );
};

export default BlogsPage;