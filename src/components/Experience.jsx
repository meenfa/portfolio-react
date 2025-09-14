import React from 'react';

const Experience = () => {
  const experience = [
    {
      role: "Laravel Developer (Intern)",
      company: "NepBigyapan",
      period: "Dec 2024 – April 2025",
      description: [
        "Gained hands-on experience with Laravel and React",
        "Built a Construction Company Website using both backend and frontend using Laravel and React.js.",
        "Developed backend APIs and managed database integration efficiently.",
      ],
      tags: ["Laravel",, "RESTful APIs", "Full-stack Development"]
    },
  ];

  return (
    <section id="experience" className="py-16 bg-white pt-2">
      <div className="mx-auto px-2 max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-black">Experience</h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="border-l-1 border-gray-400 pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h3 className="font-semibold text-black">{exp.role}</h3>
                <span className="text-gray-500 text-sm">{exp.period}</span>
              </div>
              <p className="text-gray-500 text-sm mb-2">{exp.company}</p>
              <ul className="mt-4 text-sm space-y-2 list-disc pl-5 text-gray-800 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {/* <div className="flex flex-wrap gap-2 mt-4">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg border border-gray-300 bg-gray-100 text-gray-700 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div> */}
              <div className="flex flex-wrap gap-0 mb-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="px-1 py-1 text-sm text-gray-500">
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