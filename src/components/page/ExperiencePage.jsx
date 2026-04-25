import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { experience } from "../data/experienceData";
import Footer from "../Footer";
import Navbar from "../Navbar";

const ExperiencePage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <header className="py-8 pt-24">
        <div className="mx-auto px-2 max-w-2xl">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Work Experience
          </h1>

          <p className="text-gray-700 text-sm md:text-lg">
            Showcasing my work experience and projects
          </p>
        </div>
      </header>

      <section className="py-4 bg-white">
        <div className="mx-auto px-3 max-w-2xl">
          <div className="space-y-6">
            {experience.map((exp, index) => {
              const isOpen = activeIndex === index;

              return (
                <div key={index} className="py-2 transition">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full text-left"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <div className="flex items-center gap-1">
                          <h3 className="font-semibold text-black text-base">
                            {exp.role}
                          </h3>

                          <ChevronRight
                            size={16}
                            className={`text-gray-900 hover:bg-gray-100 transition-transform duration-200 cursor-pointer ${isOpen ? "rotate-90" : ""
                              }`}
                          />
                        </div>

                        <p className="text-gray-600 text-sm mt-1">
                          {exp.company}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-gray-500 text-sm block">
                          {exp.period}
                        </span>
                        <span className="text-gray-500 text-sm block">
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-4">
                      <ul className="text-sm space-y-2 text-gray-700">
                        {exp.description.map((item, i) => (
                          <li key={i} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {exp.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 text-xs border border-gray-200 rounded-md text-gray-700"
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

        <Footer />
      </section>
    </div>
  );
};

export default ExperiencePage;