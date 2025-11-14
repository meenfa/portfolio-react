import React from 'react';

const Skills = () => {
  const skills = [
    "Python", "Django", "Laravel", "PHP", "RESTful APIs",
    "React", "JavaScript", "GitHub", "Docker",
    "PostgreSQL", "MySQL", "Redis",
    "Postman", "Figma", "Canva"
  ];

  return (
    <section id="skills" className="py-12 bg-white pt-0">
      <div className="mx-auto px-2 max-w-2xl">
        <h2 className="text-xl font-bold mb-2 text-black">Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-3 rounded border border-gray-400 text-gray-800 text-base text-center cursor-pointer hover:bg-gray-50 hover:border-gray-500 transition-all duration-150"
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