import React from 'react';

const Experience = () => {
  const experience = [
    {
      role: "Backend Developer Intern",
      company: "NepBigyapan",
      companyUrl: "https://www.nepbigyapan.com.np",
      location: "Kathmandu, Nepal",
      period: "Dec 2024 – April 2025",
      description: [
        "Worked on backend features for a College Management System using Laravel.",
        "Implemented authentication, validation, and database relationships.",
        "Collaborated with frontend team integrating React-based interfaces.",
      ],
      tags: ["Laravel", "React.js", "REST APIs", "MySQL", "Git"],
    },
  ];

  return (
    <section className="py-10 bg-white pt-0 ">
      <div className="mx-auto px-3 max-w-2xl">
        
        <h2 className="text-2xl font-bold mb-4 text-black">Experience</h2>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-300 pl-4">

              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-black text-base">{exp.role}</h3>
                <span className="text-gray-500 text-sm">{exp.period}</span>
              </div>

              <div className="flex justify-between items-start">
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 text-sm hover:text-gray-900 hover:underline"
                >
                  {exp.company} ↗
                </a>
                <span className="text-gray-500 text-sm">{exp.location}</span>
              </div>

              <ul className="mt-3 text-sm space-y-1.5 text-gray-700">
                {exp.description.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1 mt-3">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-xs bg-gray-100 border border-gray-200 rounded-md text-gray-700"
                  >
                    {tag}
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
