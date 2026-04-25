import React from "react";

const HeroSkillSecondaryBtn = ({ icon: Icon, label, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        inline-flex items-center font-bold text-xs px-2 py-1
        border rounded-lg border-dashed border-gray-800
        bg-black
       shadow-[inset_0_0_0_rgba(0,0,0,0.24)]
        transition-all duration-300 cursor-pointer
      "
    >
     {Icon && <Icon className={className} />}

      <span className="text-white">
        {label}
      </span>
    </button>
  );
};


export default HeroSkillSecondaryBtn;
