import React, { useState } from 'react';
import { projects } from '../components/data/projectsData';
import ProjectCard from '../components/ui/ProjectCard';
import Navbar from './Navbar';
import Footer from './Footer';
import UpcomingProjects from './UpcomingProjects';

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.project_type === filter);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <header className="text-center justify-left py-8 pt-32 border-b border-dashed border-gray-300">
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
        Projects
        </h1>
        <p className="text-gray-700 text-sm md:text-lg">
         Showcasing my projects across various technologies.
        </p>
      </header>

      <section className="py-8 bg-white pt-4">
        <div className="mx-auto px-2 max-w-2xl">
          <h2 className="text-2xl font-bold text-black mb-8">Projects</h2>

          <div className="flex gap-1 mb-4">
            {["All", "Full Stack", "Frontend", "Backend"].map(type => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-3 py-1 text-sm rounded-lg cursor-pointer transition-colors duration-200 ${filter === type
                  ? "text-white bg-gray-900"
                  : "text-gray-400 hover:text-black bg-gray-200 hover:bg-gray-100"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      <UpcomingProjects />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
