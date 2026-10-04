import React, { useState } from 'react';
import { Github, ExternalLink, Link } from 'lucide-react';
import Footer from './Footer';
import Navbar from './Navbar';


const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      "title": "Postbox",
      "description": "A real-time social network and chat app with instant messaging and secure Google OAuth login.",
      "tags": ["Django", "Django Channels", "Google OAuth", "WebSockets"],
      "github": "https://github.com/ankitkarki27/Postbox-social-network-chatapp",
      "link": "",
      "image": "/image/project/9.png",
      "status": "completed",
      "project_type": "Full Stack"
    },
    {
      title: "Digital Padhai",
      description: "An online learning platform for course enrollment and progress tracking, built with plans for forums and AI interview features.",
      tags: ["React", "Django", "PostgreSQL", "Tailwind"],
      github: "https://github.com/ankitkarki27/eLearning-Platform-django-react",
      image: "/image/project/6.png",
      status: "ongoing",
      project_type: "Full Stack",
    },
    {
      title: "Rainbow Constructions",
      description: "Company site with admin dashboard for managing projects, blogs, and services. Fully responsive for all devices.",
      tags: ["React", "Laravel", "MySQL", "Tailwind"],
      github: "https://github.com/ankitkarki27/Construction-backend",
      link: "https://rainbowconstructions.vercel.app/",
      image: "/image/project/5.png",
      status: "completed",
      project_type: "Full Stack",
    },
    {
      title: "Jobs Nepal",
      description: "Job portal where companies can post openings and users can browse and apply with ease.",
      tags: ["Laravel", "MySQL", "Tailwind CSS"],
      github: "https://github.com/ankitkarki27/job-portal",
      image: "/image/project/4.png",
      status: "completed",
      project_type: "Full Stack",
    },
    {
      title: "TrendyStore",
      description: "A Shopping platform with product browsing, cart, and checkout functionality.",
      tags: ["Django", "Tailwind CSS", "PostgreSQL"],
      github: "https://github.com/ankitkarki27/dj-ecomstore.git",
      link: "https://ankitkarki27.pythonanywhere.com/",
      image: "/image/project/2.png",
      status: "completed",
      project_type: "Full Stack",
    },
    

    // {
    //   title: "Donors Nepal",
    //   description: "Connects blood seekers with nearby donors using location-based matching.",
    //   tags: ["PHP", "MySQL"],
    //   github: "https://github.com/ankitkarki27/Donors-Nepal.git",
    //   image: "/image/3.png",
    //   status: "completed",
    //   project_type: "Backend"
    // },
  ];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.project_type === filter);

  return (
    <section id="projects" className="py-8 bg-white pt-0">
      <div className="mx-auto px-2 max-w-2xl">
        <h2 className="text-xl font-bold text-black mb-4">Projects</h2>
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
            <div
              key={index}
              className="border-b border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-400 bg-white"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover cursor-pointer border-y-stone-950"
                  onClick={() => project.link ? window.open(project.link, "_blank") : window.open(project.github, "_blank")}
                />
                <div className="absolute top-1 left-2">
                  <span
                    className={`text-xs px-2 py-1 border rounded-lg ${project.status === "ongoing"
                      ? "bg-yellow-200 text-black border-b border-gray-200"
                      : "bg-green-200 text-black border-b border-green-300"
                      }`}
                  >
                    {project.status === "ongoing" ? "Building" : "Completed"}
                  </span>
                </div>
              </div>

              <div className="p-2">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-bold text-black">{project.title}</h3>
                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-black transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-800 hover:text-blue-800 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-3 line-clamp-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-2 flex flex-wrap gap-1">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        
        {/* <UpcomingProjects /> */}
       <Footer />
      </div>
    </section>
  );
};

export default Projects;