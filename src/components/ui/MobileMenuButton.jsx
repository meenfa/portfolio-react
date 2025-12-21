// components/ui/MobileMenuButton.jsx
import { FiMenu, FiX } from 'react-icons/fi';

export const MobileMenuButton = ({ 
  isOpen, 
  onClick,
  className = '',
  buttonClassName = ''
}) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick(e);
  };

  return (
    <div className={`md:hidden ${className}`}>
      <button
        onClick={handleClick}
        className={`p-2 flex items-center justify-center text-black hover:text-gray-900 transition-colors ${buttonClassName}`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <FiX className="w-6 h-6 transition-transform duration-300" />
        ) : (
          <FiMenu className="w-6 h-6 transition-transform duration-300" />
        )}
      </button>
    </div>
  );
};