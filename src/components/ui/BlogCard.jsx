import { HiArrowRight } from "react-icons/hi2";

export default function BlogCard({ title, slug, createdOn, readTime }) {
  return (
    <a
      href={`/blog/${slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block py-4 transition group"
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="text-base font-semibold text-black group-hover:text-gray-700 transition">
            {title}
          </h3>
        </div>

        <div className="shrink-0 text-right">
          <p className="text-sm text-gray-500 inline-flex items-center gap-1 group-hover:text-black transition">
            Read more
            <HiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
          </p>
        </div>
      </div>

      {/* Bottom section with date and read time */}
      <div className="mt-2 flex gap-2 text-xs text-gray-400">
        <span>{createdOn}</span>
        {/* <span>,</span> */}
        <span>{readTime} min read</span>
      </div>
    </a>
  );
}