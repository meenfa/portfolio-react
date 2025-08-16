import React from 'react';

const Experience = () => {
  const experience = [
    {
      role: "Backend Developer (Intern )",
      company: "NepBigyapan",
      period: "Dec 2024 – May 2025",
      description: [
        "Gained hands-on experience with Laravel and Django",
        "Worked on projects like an institution management system and a restaurant management system",
        "Built RESTful APIs for various applications",
        "Explored full-stack development through small internal projects"
      ],
      tags: ["Laravel", "Django", "RESTful APIs", "Full-stack Development"]
    },
  ];

  const sectionStyle = {
    scrollMarginTop: '4rem'
  };

  return (
    <section
      id="experience"
      style={sectionStyle}
      className="py-16"
    >
      <div className="mx-auto px-2 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-white">Experience</h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-500 pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h3 className="font-semibold">{exp.role}</h3>
                <span className="text-gray-400 text-sm">{exp.period}</span>
              </div>
              <p className="text-gray-400 text-sm mb-2">{exp.company}</p>
              <ul className="mt-4 text-sm space-y-2 list-disc pl-5">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
