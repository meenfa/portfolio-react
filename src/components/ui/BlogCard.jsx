export default function BlogCard({ title, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-sm p-4 transition-all duration-300 border border-dashed border-gray-500"
    >
      <h3 className="text-lg font-semibold text-gray-800">
        {title}
      </h3>

      <p className="text-blue-600 text-sm mt-2 font-medium">
        Read Article →
      </p>
    </a>
  );
}
