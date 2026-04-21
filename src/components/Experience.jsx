import React, { useState } from "react";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const experience = [
    {
      role: "Django Developer",
      company: "Vasuki Tech",
      location: "Remote",
      period: "Nov 2025 – Present",
      description: [
        "Worked as a backend developer in a startup environment, primarily using Django to build and maintain RESTful APIs. Designed database schemas, implemented business logic, and handled data validation to ensure reliable application behavior. Collaborated with frontend developers for API integration and participated in debugging, testing, and iterative development processes.",
      ],
      tags: ["Django", "PostgreSQL", "REST APIs"],
    },
    {
      role: "Backend Developer (Intern → Junior Backend Developer)",
      company: "NepBigyapan",
      companyUrl: "https://www.nepbigyapan.com.np",
      location: "Kathmandu, Nepal",
      period: "Nov 2024 – Sep 2025",
      description: [
        "Started as an intern and progressed to a Junior Backend Developer role, contributing to backend development using Laravel. Worked on building and maintaining backend features, including authentication, data validation, and relational database design. Developed and integrated REST APIs to support frontend applications, and collaborated closely with frontend developers to ensure smooth system functionality and performance.",
      ],
      tags: ["Laravel", "REST APIs", "MySQL", "Git"],
    },
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-white pt-10">
      <div className="mx-auto px-3 max-w-2xl">
        <h2 className="text-2xl font-bold mb-2 text-black">Experience</h2>

        <div className="space-y-2">
          {experience.map((exp, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="cursor-pointer transition"
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-black text-base">
                      {exp.role}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {exp.company}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-gray-500 text-sm block">
                      {exp.period}
                    </span>
                    <span className="text-gray-500 text-sm block">
                      {exp.location}
                    </span>
                  </div>
                </div>

                {isOpen && (
                  <div className="mt-4">
                    
                    <ul className="text-sm space-y-1.5 text-gray-700">
                      {exp.description.map((item, i) => (
                        <li key={i}> {item}</li>
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
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;