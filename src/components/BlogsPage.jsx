import React from 'react';
import { blogs } from '../components/data/blogsData';
import BlogCard from '../components/ui/BlogCard';
import Navbar from './Navbar';
import Footer from './Footer';

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <header className="text-center justify-left py-8 pt-32 border-b border-dashed border-gray-300">
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
         Blogs
        </h1>
        <p className="text-gray-700 text-sm md:text-lg">
          Read my Latest Blogs
        </p>
      </header>
      <section className="py-8 bg-white pt-8">
        <div className="mx-auto px-3 max-w-2xl">
          <h2 className="text-xl font-bold text-black mb-4">Latest Blogs</h2>

          <div className="space-y-2">
            {blogs.map((blog, index) => (
              <BlogCard
                key={index}
                title={blog.title}
                link={blog.link}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogsPage;
