import React from 'react';
import { projects } from '../components/data/projectsData';
import ProjectCard from '../components/ui/ProjectCard';
import { useNavigate } from 'react-router-dom';

const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-2 bg-white pt-6 ">
      <div className="mx-auto px-2 max-w-2xl">
        <h2 className="text-2xl font-bold text-black mb-2">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate('/projects')}
            className="
  px-4 py-2 text-sm font-semibold 
  text-black 
  border border-gray-300/60
  rounded-lg 
  bg-white/30 backdrop-blur-lg
  shadow-[inset_0_4px_8px_rgba(0,0,0,0.18)]
  hover:shadow-[inset_0_0_20px_4px_rgba(0,0,0,0.25)]
  transition-all duration-300 
  cursor-pointer
"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
