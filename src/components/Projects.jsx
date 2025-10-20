import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Digital Padhai",
      description: "An online education platform for course enrollment and student progress tracking, designed to support community discussion forums and an AI-powered text interview module in future releases.",
      tags: ["React", "Django", "PostgreSQL", "RTK", "Tailwind"],
      github: "https://github.com/ankitkarki27/eLearning-Platform-django-react",
      image: "/image/padhai.png",
      status: "ongoing",
      project_type: "Full Stack",
    },
    {
      title: "Rainbow Constructions",
      description: "Company site with admin dashboard for managing projects, blogs, and services. Fully responsive for all devices.",
      tags: ["React", "Laravel", "MySQL", "Tailwind"],
      github: "https://github.com/ankitkarki27/Construction-backend",
      link: "https://rainbowconstructions.vercel.app/",
      image: "/image/construction-company.png",
      status: "completed",
      project_type: "Full Stack",
    },
    {
      title: "Jobs Nepal",
      description: "Job portal where companies can post openings and users can browse and apply with ease.",
      tags: ["Laravel", "MySQL", "Tailwind CSS"],
      github: "https://github.com/ankitkarki27/job-portal",
      image: "/image/project-jobsnepal.png",
      status: "completed",
      project_type: "Full Stack",
    },
    {
      title: "Trendy: E-commerce App",
      description: "A Shopping platform with product browsing, cart, and checkout functionality.",
      tags: ["Django", "Tailwind CSS", "PostgreSQL"],
      github: "https://github.com/ankitkarki27/dj-ecomstore.git",
      link: "https://ankitkarki27.pythonanywhere.com/",
      image: "/image/project-trendy.png",
      status: "ongoing",
      project_type: "Full Stack",
    },
    {
      title: "Bookmarker",
      description: "Tool to save, organize, and manage bookmarks in one place with a clean UI.",
      tags: ["React", "Tailwind CSS", "Vercel"],
      github: "https://github.com/ankitkarki27/bookmarker",
      link: "https://bookmarker-theta.vercel.app/",
      image: "/image/project-bookmarker.jpg",
      status: "completed",
      project_type: "Frontend",
    },
    {
      title: "Donors Nepal",
      description: "Connects blood seekers with nearby donors using location-based matching.",
      tags: ["PHP", "MySQL"],
      github: "https://github.com/ankitkarki27/Donors-Nepal.git",
      image: "/image/project-dn3.jpg",
      status: "completed",
      project_type: "Backend"
    },
    {
      title: "Uthaoo: Online Scrap Collection System",
      description: "Lets users schedule and manage household scrap pickups through an online dashboard.",
      tags: ["PHP", "MySQL"],
      github: "https://github.com/ankitkarki27/uthaoo-Online-Scrap-Collection-System.git",
      date: "2023",
      image: "/image/project-uthaoo.jpg",
      status: "completed",
      project_type: "Backend"
    }
  ];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.project_type === filter);

  return (
    <section id="projects" className="py-16 bg-white pt-0">
      <div className="mx-auto px-2 max-w-3xl">
        <h2 className="text-2xl font-bold text-black mb-4">Projects</h2>

        {/* Sorting Buttons */}
        <div className="flex gap-1 mb-4">
          {["All", "Full Stack", "Frontend", "Backend"].map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1 text-sm border rounded-lg cursor-pointer ${
                filter === type
                  ? "border-white text-blue-600 bg-gray-200"
                  : "border-gray-600 text-gray-400 hover:text-black"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="space-y-8 mt-2">
          {filteredProjects.map((project, index) => (
            <div key={index} className="border-b border-gray-800 pb-8 last:border-0">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-5/12">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto border border-gray-800 rounded-lg object-cover"
                  />
                </div>
                
                <div className="w-full lg:w-7/12">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-black">{project.title}</h3>
                    <span className={`text-xs px-2 py-1 border rounded-lg cursor-pointer ${
                      project.status === "ongoing" ? "text-yellow-800" : "text-green-400"
                    }`}>
                      {project.status === "ongoing" ? "Ongoing" : "Completed"}
                    </span>
                  </div>
                  
                  <p className="text-gray-900 mb-2 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-sm text-gray-600">
                        {tag}{i !== project.tags.length - 1 && ' / '}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-900 hover:text-black"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-gray-900 hover:text-black"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;