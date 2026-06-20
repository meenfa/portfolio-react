import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { RiArrowGoBackFill, RiCloseLine, RiLinksLine } from "react-icons/ri";
import { HiArrowRight, HiCalendar, HiShare, HiOutlineLink, HiCheck } from "react-icons/hi2";
import { blogs } from "../data/blogsData";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import PageFade from "../ui/motion/PageFade";
import { MdContentCopy } from "react-icons/md";

const blogFiles = import.meta.glob("../../content/blogs/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
});

const ShareModal = ({ isOpen, onClose, blogUrl, blogTitle }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(blogUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    const shareOnX = () => {
        const text = encodeURIComponent(blogTitle);
        const url = encodeURIComponent(blogUrl);
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank", "noopener,noreferrer");
    };

    const shareOnLinkedIn = () => {
        const url = encodeURIComponent(blogUrl);
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank", "noopener,noreferrer");
    };

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="share-modal-title"
        >
            <div 
                className="bg-[#FAF9F6] rounded-xl shadow-xl w-full max-w-md p-6 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition"
                    aria-label="Close share dialog"
                >
                    <RiCloseLine className="text-lg" />
                </button>

                <h3 id="share-modal-title" className="text-lg font-semibold text-gray-900 mb-4">
                    Share this article
                </h3>

                <div className="space-y-4">
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <HiOutlineLink className="text-gray-400 flex-shrink-0" />
                        <input
                            type="text"
                            readOnly
                            value={blogUrl}
                            className="flex-1 bg-transparent text-sm text-gray-700 outline-none truncate"
                            aria-label="Article link"
                        />
                        <button
                            onClick={handleCopy}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700 bg-[#FAF9F6] border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition"
                        >
                            {copied ? (
                                <>
                                    
                                    <span className="text-gray-500">Copied</span>
                                </>
                            ) : (
                                <MdContentCopy /> 
                            )}
                        </button>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                        <button
                            onClick={shareOnX}
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200 transition border border-gray-200"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                            X/Twitter
                        </button>
                        <button
                            onClick={shareOnLinkedIn}
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#0A66C2] rounded-lg hover:bg-[#094d94] transition"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            LinkedIn
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const BlogPostPage = () => {
    const { slug } = useParams();
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);

    const blog = blogs.find((item) => item.slug === slug);
    const otherBlogs = blogs.filter((item) => item.slug !== slug).slice(0, 3);
    const filePath = `../../content/blogs/${slug}.md`;
    const content = blogFiles[filePath];

    const blogUrl = typeof window !== "undefined" ? window.location.href : "";
    const blogTitle = blog?.title || "";

    if (!blog || !content) {
        return (
            <div className="min-h-screen bg-[#FAF9F6] text-gray-900">
                <Navbar />
                <PageFade>
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
                </PageFade>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FAF9F6]">
            <Navbar />
            <PageFade>
                <main className="mx-auto max-w-2xl px-4 pt-28 pb-20">
                    <Link
                        to="/blogs"
                        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition mb-8 group"
                    >
                        <RiArrowGoBackFill className="text-sm transition-transform group-hover:-translate-x-0.5" />
                        Back to blogs
                    </Link>

                    <header className="mb-10">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                            {blog.title}
                        </h1>
                        
                        <div className="flex flex-wrap items-center gap-3 mt-5 text-sm text-gray-900">
                            <div className="flex items-center gap-1.5">
                                <HiCalendar className="h-4 w-4 text-gray-800 flex-shrink-0" />
                                <time dateTime={blog.createdOn}>{blog.createdOn}</time>
                            </div>
                            
                            {blog.readTime && (
                                <>
                                    <span className=" text-gray-900 ">{blog.readTime} min read</span>
                                </>
                            )}
                            
                            <div className="ml-auto">
                                <button
                                    onClick={() => setIsShareModalOpen(true)}
                                    className="inline-flex items-center gap-1.5 text-gray-800 hover:text-gray-900 transition px-2.5 py-1.5 rounded-lg hover:bg-gray-100 cursor-pointer"
                                    aria-label="Share this article"
                                >
                                    <HiShare className="h-4 w-4 trext-black" />
                                    <span className="text-black hidden sm:inline cursor-pointer">Share</span>
                                </button>
                            </div>
                        </div>
                    </header>

                    <article className="blog-content">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
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
                                            <figcaption className="text-center text-xs text-gray-600 mt-2 italic">
                                                {alt}
                                            </figcaption>
                                        )}
                                    </figure>
                                ),

                                h1: ({ children }) => (
                                    <h1 className="text-2xl font-black text-gray-900 mt-8 mb-24">
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

                                p: ({ children }) => (
                                    <p className="text-gray-800 text-base leading-relaxed mb-4 text-justify">
                                        {children}
                                    </p>
                                ),

                                ul: ({ children }) => (
                                    <ul className="list-disc list-outside ml-5 space-y-2 mb-6 text-gray-700">
                                        {children}
                                    </ul>
                                ),
                                ol: ({ children }) => (
                                    <ol className="list-decimal list-outside ml-5 space-y-2 mb-6 text-gray-700">
                                        {children}
                                    </ol>
                                ),
                                li: ({ children }) => (
                                    <li className="text-gray-700 leading-relaxed text-justify">
                                        {children}
                                    </li>
                                ),

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

                                blockquote: ({ children }) => (
                                    <blockquote className="border-l-4 border-gray-300 pl-5 py-2 my-6 text-gray-600 italic text-justify">
                                        {children}
                                    </blockquote>
                                ),

                                code: ({ inline, children }) =>
                                    inline ? (
                                        <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">
                                            {children}
                                        </code>
                                    ) : (
                                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 text-sm font-mono">
                                            <code>{children}</code>
                                        </pre>
                                    ),

                                hr: () => <hr className="my-10 border-gray-200" />,
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    </article>

                    {otherBlogs.length > 0 && (
                        <div className="mt-20 pt-10 border-t border-gray-100">
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
            </PageFade>
            <Footer />

            <ShareModal
                isOpen={isShareModalOpen}
                onClose={() => setIsShareModalOpen(false)}
                blogUrl={blogUrl}
                blogTitle={blogTitle}
            />
        </div>
    );
};

export default BlogPostPage;