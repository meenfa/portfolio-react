import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {

  const projects = [
    {
      title: "Digital Padhai",
      description: "An online platform for course enrollment and student progress tracking, designed to support community discussion forums and an AI-powered text interview module in future releases.",
      tags: ["React", "Django", "PostgreSQL", "RTK", "Tailwind"],
      github: "https://github.com/ankitkarki27/eLearning-Platform-django-react",
      image: "/image/padhai.png",
      status: "ongoing" // Added status
    },
    {
      title: "Rainbow Constructions",
      description: "Company site with admin dashboard for managing projects, blogs, and services. Fully responsive for all devices.",
      tags: ["React", "Laravel", "MySQL", "Tailwind"],
      github: "https://github.com/ankitkarki27/Construction-backend",
      link: "https://rainbowconstructions.vercel.app/",
      image: "/image/construction-company.png",
      status: "completed" // Added status
    },
    {
      title: "Jobs Nepal",
      description: "Job portal where companies can post openings and users can browse and apply with ease.",
      tags: ["Laravel", "MySQL", "Tailwind CSS"],
      github: "https://github.com/ankitkarki27/job-portal",
      image: "/image/project-jobsnepal.png",
      status: "completed" // Added status
    },
    {
      title: "Trend-e-vision: E-commerce App",
      description: "Shopping platform with product browsing, cart, and checkout functionality.",
      tags: ["Django", "Tailwind CSS", "PostgreSQL"],
      github: "https://github.com/ankitkarki27/dj-ecomstore.git",
      link: "https://ankitkarki27.pythonanywhere.com/",
      image: "/image/project-trendy.png",
      status: "ongoing" // Added status
    },
    {
      title: "Bookmarker",
      description: "Tool to save, organize, and manage bookmarks in one place with a clean UI.",
      tags: ["React"],
      github: "https://github.com/ankitkarki27/bookmarker",
      link: "https://bookmarker-theta.vercel.app/",
      image: "/image/project-bookmarker.jpg",
      status: "completed" // Added status
    },
    {
      title: "Donors Nepal",
      description: "Connects blood seekers with nearby donors using location-based matching.",
      tags: ["PHP", "Laravel", "MySQL"],
      github: "https://github.com/ankitkarki27/Donors-Nepal.git",
      image: "/image/project-dn3.jpg",
      status: "completed" // Added status
    },
    {
      title: "Uthaoo: Online Scrap Collection System",
      description: "Lets users schedule and manage household scrap pickups through an online dashboard.",
      tags: ["PHP", "MySQL"],
      github: "https://github.com/ankitkarki27/uthaoo-Online-Scrap-Collection-System.git",
      date: "2023",
      image: "/image/project-uthaoo.jpg",
      status: "completed" // Added status
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white pt-2">
      <div className="mx-auto px-2 max-w-3xl">
        <h2 className="text-2xl font-bold text-black mb-6">Projects</h2>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-full lg:w-5/12 overflow-hidden rounded-lg border border-gray-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transition-all duration-500 hover:bg-blue-50 hover:scale-102"
                  />
                </div>
                <div className="w-full lg:w-7/12">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-base font-bold text-black">{project.title}</h3>
                    {/* Status Badge */}
                    <span className={`text-xs px-2 py-1 rounded-lg ${
                      project.status === "ongoing" 
                        ? "bg-gray-200 text-yellow-900" 
                        : "bg-green-100 text-green-800"
                    }`}>
                      {project.status === "ongoing" ? "Ongoing" : "Completed"}
                    </span>
                  </div>
                  <p className="text-gray-900 mb-2 text-sm text-wrap">{project.description}</p>

                  <div className="flex flex-wrap gap-0 mb-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-1 py-2 text-sm text-gray-700 text-wrap">
                        {tag}{i !== project.tags.length - 1 && ' / '}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-xs text-gray-600 hover:text-black transition-colors"
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Github
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-xs text-gray-600 hover:text-black transition-colors"
                      >
                        <ExternalLink className="w-3 h-3 mr-2" />
                        View
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {index !== projects.length - 0 && (
                <div className="mt-12 border-t border-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;