import React from 'react';
import {
  FaPython,
  FaLaravel,
  FaPhp,
  FaReact,
  FaJs,
  // FaGithub,
  FaDocker,
  FaDatabase,
  FaFigma,
  FaServer
} from 'react-icons/fa';
import {
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiPostman,
  SiCanva
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: "Python", icon: <FaPython size={30} /> },
    { name: "Django", icon: <SiDjango size={30} /> },
    { name: "Laravel", icon: <FaLaravel size={30} /> },
    { name: "PHP", icon: <FaPhp size={30} /> },
    { name: "RESTful APIs", icon: <FaServer size={30} /> },
    { name: "React", icon: <FaReact size={30} /> },
    { name: "JavaScript", icon: <FaJs size={30} /> },
    // { name: "GitHub", icon: <FaGithub size={30} /> },
    { name: "Docker", icon: <FaDocker size={30} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={30} /> },
    { name: "MySQL", icon: <SiMysql size={30} /> },
    { name: "Redis", icon: <SiRedis size={30} /> },
    { name: "Postman", icon: <SiPostman size={30} /> },
    { name: "Figma", icon: <FaFigma size={30} /> },
    { name: "Canva", icon: <SiCanva size={30} /> },
  ];

  return (
    <section id="skills" className="py-12 bg-white pt-0">
      <div className="mx-auto px-2 max-w-2xl">
         <h2 className="text-xl font-bold text-black mb-4">Technologies & Tools</h2>
        <div className="grid grid-cols-6 sm:grid-cols-6 gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center px-3 py-3 text-base cursor-pointer transition-all duration-150"
            >
              {skill.icon}
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gray-300 text-black text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                {skill.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills