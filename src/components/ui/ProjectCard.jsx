import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => (
  <div className="border-b border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-400 bg-white">
    <div className="relative group">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover cursor-pointer"
        onClick={() => project.link ? window.open(project.link, "_blank") : window.open(project.github, "_blank")}
      />
      <div className="absolute top-1 left-2">
        <span className={`text-xs px-2 py-1 border rounded-lg ${project.status === "ongoing" ? "bg-yellow-100" : "bg-green-200"}`}>
          {project.status === "ongoing" ? "Building" : "Completed"}
        </span>
      </div>
    </div>

    <div className="p-2">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-base font-bold text-black">{project.title}</h3>
        <div className="flex gap-4 pt-2">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
            <Github className="w-4 h-4" />
          </a>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-800">
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-700 text-sm mb-2 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-1">
        {project.tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 bg-gray-200 text-gray-900 text-xs rounded-lg ">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
