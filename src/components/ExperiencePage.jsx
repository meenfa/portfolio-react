import React from 'react';
import ProjectsSection from './ProjectsSection';
import Footer from './Footer';
import Navbar from './Navbar';

const ExperiencePage = () => {
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
      role: "Backend Developer",
      company: "NepBigyapan",
      companyUrl: "https://www.nepbigyapan.com.np",
      location: "Kathmandu, Nepal",
      period: "Nov 2024 – September 2025",
      description: [
        "Started as an intern and progressed to a Junior Backend Developer role, contributing to backend development using Laravel. Worked on building and maintaining backend features, including authentication, data validation, and relational database design. Developed and integrated REST APIs to support frontend applications, and collaborated closely with frontend developers to ensure smooth system functionality and performance.",
      ],
      tags: ["Laravel", "REST APIs", "MySQL", "Git"],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <header className="text-center justify-left py-8 pt-32 border-b border-dashed border-gray-300">
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Work Experience
        </h1>
        <p className="text-gray-700 text-sm md:text-lg">
          Showcasing my work experience and projects
        </p>
      </header>
      <section className="py-8 bg-white pt-8">
        
        <div className="mx-auto px-3 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4 text-black">Experience</h2>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-black text-base">{exp.role}</h3>
                  <span className="text-gray-500 text-sm">{exp.period}</span>
                </div>

                <div className="flex justify-between items-start">
                  <a
                    className="text-gray-600 text-sm hover:text-gray-900"
                  >
                    {exp.company}
                  </a>
                  <span className="text-gray-500 text-sm">{exp.location}</span>
                </div>

                <ul className="mt-3 text-sm space-y-1.5 text-gray-700">
                  {exp.description.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
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

        <ProjectsSection />
        <Footer />
      </section>
    </div>
  );
};

export default ExperiencePage;
