import React from 'react';
import { projects } from '../components/data/projectsData';
import ProjectCard from '../components/ui/ProjectCard';
import { useNavigate } from 'react-router-dom';
import HeroSkillBtn from './ui/HeroSkillBtn';

const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 bg-white pt-2">
      <div className="mx-auto px-2 max-w-2xl">
        <h2 className="text-2xl font-bold text-black mb-2">Projects</h2>

        <div className="flex flex-col divide-y divide-gray-700">
          {projects.slice(0, 4).map((project, index) => (
            <div key={index}>
              <ProjectCard project={project} />
              {index < projects.slice(0, 4).length - 1 && (
                <div className="my-4"></div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <HeroSkillBtn
            label="View all Projects"
            className="w-6 h-10 mr-1 text-black text-sm"
            onClick={() => navigate("/projects")}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;