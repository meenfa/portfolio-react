import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => (
  <div className="py-5 transition-all duration-300 bg-white">
    <div className="flex flex-col gap-2">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="text-base font-bold text-black">{project.title}</h3>
            <span className={`text-[10px] px-2 py-0.5 border border-dotted rounded-full ${
              project.status === "ongoing" ? "bg-gray-100 border-gray-300" : "bg-amber-100 border-amber-300"
            }`}>
              {project.status === "ongoing" ? "Building" : "Completed"}
            </span>
          </div>
          
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3 shrink-0 pt-1">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-black transition"
            title="View GitHub repository"
          >
            <Github className="w-4 h-4" />
          </a>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-blue-600 transition"
              title="View live demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;