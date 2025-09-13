import React from 'react';

const Skills = () => {
  const skills = [
    "Python", "Django", "Laravel", "React", "PostgreSQL",
    "MySQL", "Postman", "Github"
  ];

  return (
    <section id="skills" className="py-12 bg-white pt-2">
      <div className="mx-auto px-2 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-black">Stack</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-lg border border-gray-300 bg-gray-100 text-gray-700 text-sm cursor-pointer hover:bg-gray-200 transition-colors"
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