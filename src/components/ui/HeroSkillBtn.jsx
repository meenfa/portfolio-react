import React from "react";

const HeroSkillBtn = ({ icon: Icon, label, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        inline-flex items-center font-bold text-xs px-2 py-1
        border rounded-lg border-dashed border-gray-800
        bg-[#FAF9F6]
        hover:bg-gray-100
        transition-all duration-300 cursor-pointer
      "
    >
      {Icon && <Icon className={className} />}

      <span className="text-gray-900">
        {label}
      </span>
    </button>
  );
};

export default HeroSkillBtn;