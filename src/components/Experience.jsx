import React from 'react';

const Experience = () => {
  const experience = [  
    {
      role: "Backend Developer Intern",
      company: "NepBigyapan",
      companyUrl: "https://www.nepbigyapan.com.np",
      location: "Kathmandu, Nepal (Hybrid)",
      image: "/image/nepbigyapan.png",
      period: "Dec 2024 – April 2025",
      description: [
        "Gained hands-on experience with Laravel and React",
        "Worked on a College Management System project built with Laravel.",
        "Developed backend features for student enrollment and course management.",
        "Implemented authentication, validation, and database relationships.",
      ],
      tags: ["Laravel", "RESTful APIs", "React.js", "MySQL", "Git"],
    },
    
  ];

  return (
    <section id="work" className="py-12 bg-white pt-0">
      <div className="mx-auto px-2 max-w-2xl">
        <h2 className="text-xl font-bold mb-2 text-black">Experience</h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="pl-0 relative">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                <h3 className="font-normal text-black text-base">{exp.role}</h3>
                <span className="text-gray-500 text-sm">{exp.period}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                 <a 
                    href={exp.companyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:underline hover:text-gray-700 transition-colors"
                  >
                     {exp.company} ↗
                  </a>
                <span className="text-gray-500 text-sm">{exp.location}</span>
              </div>
              <ul className="mt-4 text-sm space-y-2 list-disc pl-5 text-gray-900 mb-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-0">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="px-1 py-1 text-sm text-gray-700 ">
                    {tag}{i !== exp.tags.length - 1 && ' / '}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;