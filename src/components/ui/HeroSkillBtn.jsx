import React from "react";

const HeroSkillBtn = ({ icon: Icon, label, className }) => {
  return (
    <span
      className="
        inline-flex items-center font-bold text-xs px-2 py-1
        border rounded-lg border-dashed border-gray-400
        bg-white
       shadow-[inset_0_0_0_rgba(0,0,0,0.24)]
     
        transition-all duration-300 cursor-pointer
      "
    >
      <Icon className={className} />
      <span className="text-gray-900">{label}</span>
    </span>
  );
};

export default HeroSkillBtn;
