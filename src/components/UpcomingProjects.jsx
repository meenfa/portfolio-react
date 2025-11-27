import React, { useState } from 'react';
import { Github, ExternalLink, Link } from 'lucide-react';


const UpcomingProjects = () => {
    const [filter, setFilter] = useState("All");

    const projects = [
        // {
        //   title: "Flatbook",
        //   description: "An online learning platform for course enrollment and progress tracking, built with plans for forums and AI interview features.",
        //   tags: ["React", "Django", "PostgreSQL", "Tailwind"],
        //   github: "https://github.com/ankitkarki27/eLearning-Platform-django-react",
        //   image: "/image/project/6.png",
        //   status: "ongoing",
        //   project_type: "Full Stack",
        // },
        {
            title: "Conneqty",
            description: "Currently developing a full-stack platform that connects creators and collaboration. This project involves building the entire ecosystem—from user profiles and project sharing to real-time communication features.", tags: ["Django", "Tailwind", "In Development"],
            //   github: "https://github.com/ankitkarki27/",
            link: "https://conneqtly.me/",
            image: "/image/project/7.png",
            status: "ongoing",
            project_type: "Full Stack",
        },
    ];

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.project_type === filter);

    return (
        <section id="projects" className="py-8 bg-white pt-0">
            <div className="mx-auto px-2 max-w-2xl">
                <h2 className="text-xl font-bold text-black mb-2">Upcoming Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
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
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-gray-700 hover:text-black transition-colors duration-200"
                                            >
                                                <Github className="w-4 h-4" />
                                            </a>
                                        )}
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

                                <p className="text-gray-700 text-sm mb-3 line-clamp-3 leading-relaxed">
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
                
                <div className="mt-4 text-center">
                    <p className="text-gray-600 text-base">
                        View all projects at{' '}
                        <a
                            href="https://github.com/ankitkarki27"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 font-normal border-b-2 border-gray-500 hover:text-gray-900 hover:border-gray-900 transition-all duration-200 inline-flex items-center gap-1"
                        >
                            <Github className="w-4 h-4" />
                            ankitkarki27
                        </a>
                    </p>
                </div>

            </div>
        </section>
    );
};

export default UpcomingProjects;