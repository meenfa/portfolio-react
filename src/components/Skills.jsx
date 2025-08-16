import React from 'react';

const Skills = () => {
  const skills = [
    "Python", "Django", "Laravel", "React", "PostgreSQL",
    "MySQL", "Postman", "Github"
  ];

  const sectionStyle = {
    scrollMarginTop: '4rem'
  };

  return (
    <section
      id="skills"
      style={sectionStyle}
      className="py-16"
    >
      <div className="mx-auto px-2 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-white">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-lg border border-gray-700 bg-black text-gray-200 text-sm cursor-pointer hover:bg-gray-800 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
