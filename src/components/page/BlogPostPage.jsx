import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { RiArrowGoBackFill } from "react-icons/ri";
import { HiArrowRight } from "react-icons/hi2";
import { blogs } from "../data/blogsData";
import Navbar from "../Navbar";
import Footer from "../Footer";

const blogFiles = import.meta.glob("../../content/blogs/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
});

const BlogPostPage = () => {
    const { slug } = useParams();

    const blog = blogs.find((item) => item.slug === slug);

    // Get other blogs (excluding current)
    const otherBlogs = blogs.filter((item) => item.slug !== slug).slice(0, 3);

    const filePath = `../../content/blogs/${slug}.md`;
    const content = blogFiles[filePath];

    if (!blog || !content) {
        return (
            <div className="min-h-screen bg-white text-gray-900">
                <Navbar />
                <main className="mx-auto max-w-2xl px-5 pt-28 pb-16">
                    <p className="text-gray-500 mb-3">404</p>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        Blog not found
                    </h1>
                    <Link
                        to="/blogs"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
                    >
                        <RiArrowGoBackFill className="text-sm" />
                        Back to blogs
                    </Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="mx-auto max-w-2xl px-5 pt-28 pb-20">
                {/* Back link with icon */}
                <Link
                    to="/blogs"
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition mb-8"
                >
                    <RiArrowGoBackFill className="text-sm" />
                    Back to blogs
                </Link>

                {/* Blog header */}
                <header className="mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                        {blog.title}
                    </h1>
                    <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                        <time dateTime={blog.createdOn}>{blog.createdOn}</time>
                        {blog.readTime && (
                            <>
                                <span>•</span>
                                <span>{blog.readTime} min read</span>
                            </>
                        )}
                    </div>
                </header>

                {/* Blog content with justified text */}
                <article className="blog-content text-justify">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            // Image with caption
                            img: ({ node, src, alt, ...props }) => (
                                <figure className="my-8">
                                    <img
                                        src={src}
                                        alt={alt || "Blog image"}
                                        className="w-full rounded-xl"
                                        loading="lazy"
                                        {...props}
                                    />
                                    {alt && (
                                        <figcaption className="text-center text-sm text-gray-400 mt-3">
                                            {alt}
                                        </figcaption>
                                    )}
                                </figure>
                            ),

                            // Headings
                            h1: ({ children }) => (
                                <h1 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                    {children}
                                </h1>
                            ),
                            h2: ({ children }) => (
                                <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-3">
                                    {children}
                                </h2>
                            ),
                            h3: ({ children }) => (
                                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">
                                    {children}
                                </h3>
                            ),

                            // Paragraphs with justified text
                            p: ({ children }) => (
                                <p className="text-gray-700 leading-relaxed mb-5 text-justify">
                                    {children}
                                </p>
                            ),

                            // Lists
                            ul: ({ children }) => (
                                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                                    {children}
                                </ul>
                            ),
                            ol: ({ children }) => (
                                <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
                                    {children}
                                </ol>
                            ),
                            li: ({ children }) => (
                                <li className="text-gray-700 leading-relaxed">
                                    {children}
                                </li>
                            ),

                            // Links
                            a: ({ href, children }) => (
                                <a
                                    href={href}
                                    className="text-gray-900 underline decoration-gray-300 hover:decoration-gray-900 transition"
                                    target={href?.startsWith("http") ? "_blank" : undefined}
                                    rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                                >
                                    {children}
                                </a>
                            ),

                            // Blockquotes
                            blockquote: ({ children }) => (
                                <blockquote className="border-l-4 border-gray-300 pl-5 py-2 my-6 text-gray-600 italic">
                                    {children}
                                </blockquote>
                            ),

                            // Code blocks
                            code: ({ inline, children }) =>
                                inline ? (
                                    <code className="bg-gray-100 px-1.5 py-0.5 rounded-md text-sm font-mono text-gray-800">
                                        {children}
                                    </code>
                                ) : (
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 text-sm font-mono">
                                        <code>{children}</code>
                                    </pre>
                                ),

                            // Horizontal rule with gray-400
                            hr: () => <hr className="my-12 border-gray-400" />,
                        }}
                    >
                        {content}
                    </ReactMarkdown>
                </article>


                {/* Recommended blogs section */}
                {otherBlogs.length > 0 && (
                    <div className="mt-20">
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900">
                                More reads you might like
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">
                                Continue exploring
                            </p>
                        </div>

                        <div className="space-y-6">
                            {otherBlogs.map((recommendedBlog) => (
                                <Link
                                    key={recommendedBlog.slug}
                                    to={`/blog/${recommendedBlog.slug}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group"
                                >
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-base font-medium text-gray-900 group-hover:text-gray-600 transition">
                                                {recommendedBlog.title}
                                            </h3>
                                        </div>
                                        <div className="shrink-0 text-right">
                                            <p className="text-xs text-gray-400">
                                                {recommendedBlog.createdOn}
                                            </p>
                                            <p className="text-xs text-gray-400 mt-0.5">
                                                {recommendedBlog.readTime} min read
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-2 inline-flex items-center gap-1 text-sm text-gray-500 group-hover:text-gray-900 transition">
                                        <span>Read article</span>
                                        <HiArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-8">
                            <Link
                                to="/blogs"
                                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition"
                            >
                                View all blogs
                                <HiArrowRight className="text-sm" />
                            </Link>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default BlogPostPage;