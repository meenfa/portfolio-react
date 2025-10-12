import React from 'react';

const Skills = () => {
  const skills = [
    "Python", "Django", "Laravel", "React", "PostgreSQL",
    "MySQL", "Postman", "Github"
  ];

  return (
    <section id="skills" className="py-12 bg-black pt-2">
      <div className="mx-auto px-2 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-white">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-lg border border-gray-600 text-gray-300 text-sm"
            
              // className="px-3 py-1 rounded-lg border border-gray-600 bg-gray-800 text-gray-200 text-sm cursor-pointer transition-colors"
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