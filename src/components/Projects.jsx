import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Online Learning Platform",
      description: "A comprehensive learning management system featuring course enrollment, progress tracking, and community forums. Built with modern architecture for scalability and performance.",
      tags: ["React", "Django", "PostgreSQL", "RTK", "Tailwind"],
      github: "https://github.com/ankitkarki27/eLearning-Platform-django-react",
      image: "/image/padhai.png"
    },
    {
      title: "Constructions Company Website",
      description: "Full-featured corporate website with admin dashboard for project management, blog system, and service showcase. Optimized for performance across all devices.",
      tags: ["React", "Laravel", "MySQL", "Tailwind"],
      github: "https://github.com/ankitkarki27/Construction-backend",
      link: "https://rainbowconstructions.vercel.app/",
      image: "/image/construction-company.png"
    },
    {
      title: "Jobs Nepal",
      description: "Modern job portal connecting employers with job seekers. Features advanced search, application tracking, and user-friendly interface for seamless job hunting experience.",
      tags: ["Laravel", "MySQL", "Tailwind CSS"],
      github: "https://github.com/ankitkarki27/job-portal",
      image: "/image/project-jobsnepal.png"
    },
    {
      title: "Trend-e-vision: E-commerce App",
      description: "Feature-rich e-commerce application with product catalog, shopping cart, secure checkout, and order management. Built for optimal user experience and conversion.",
      tags: ["Django", "Tailwind CSS", "PostgreSQL"],
      github: "https://github.com/ankitkarki27/dj-ecomstore.git",
      link: "https://ankitkarki27.pythonanywhere.com/",
      image: "/image/project-trendy.png"
    },
    {
      title: "Bookmarker",
      description: "Elegant bookmark management solution with organizational features, search capabilities, and clean interface for efficient link management and discovery.",
      tags: ["Django", "React"],
      github: "https://github.com/ankitkarki27/bookmarker",
      link: "https://bookmarker-theta.vercel.app/",
      image: "/image/project-bookmarker.jpg"
    },
    {
      title: "Donors Nepal",
      description: "Life-saving blood donation platform connecting donors with recipients through location-based matching and real-time availability tracking.",
      tags: ["PHP", "Laravel", "MySQL"],
      github: "https://github.com/ankitkarki27/Donors-Nepal.git",
      image: "/image/project-dn3.jpg"
    },
    {
      title: "Uthaoo: Online Scrap Collection System",
      description: "Innovative waste management system enabling users to schedule scrap collection services through an intuitive online dashboard and tracking system.",
      tags: ["PHP", "MySQL"],
      github: "https://github.com/ankitkarki27/uthaoo-Online-Scrap-Collection-System.git",
      date: "2023",
      image: "/image/project-uthaoo.jpg"
    }
  ];

  const sectionStyle = {
    scrollMarginTop: '4rem'
  };

  return (
    <section 
      id="projects" 
      style={sectionStyle}
      className="py-16"
    >
      <div className="mx-auto px-2 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-white mb-8">Projects</h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Project Image */}
                <div className="w-full lg:w-5/12">
                  <div className="relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-gray-600 transition-all duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="w-full lg:w-7/12 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs font-medium text-gray-300 bg-gray-800/80 hover:bg-gray-700 border border-gray-700 rounded-md transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 transition-transform group-hover/link:rotate-12" />
                      <span className="font-medium">View Code</span>
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4 transition-transform group-hover/link:rotate-12" />
                        <span className="font-medium">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Divider */}
              {index !== projects.length - 1 && (
                <div className="mt-16 pt-0">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
