import React, { useState } from 'react';
import { projects } from "../data/projectsData";
import ProjectCard from "../ui/ProjectCard";
import Navbar from '../Navbar';
import Footer from '../Footer';
import UpcomingProjects from '../UpcomingProjects';

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.project_type === filter);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <header className="py-8 pt-24">
        <div className="mx-auto px-2 max-w-2xl">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Projects
          </h1>

          <p className="text-gray-700 text-sm md:text-lg">
            Showcasing my projects across various technologies.
          </p>
        </div>
      </header>

      <section className="py-4 bg-white">
        <div className="mx-auto px-2 max-w-2xl">
          {/* Changed from grid to flex column for single column layout */}
          <div className="flex flex-col gap-2 divide-y divide-gray-600">
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