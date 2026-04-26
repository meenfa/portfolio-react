import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const UpcomingProjects = () => {
    const [filter, setFilter] = useState("All");

    const projects = [
        {
            title: "conneqtly.me",
            description: "Currently developing a full-stack platform that connects creators and collaboration. This project involves building the entire ecosystem—from user profiles and project sharing to real-time communication features.",
            tags: ["Django", "Tailwind", "In Progress"],
            link: "https://conneqtly.me/",
            status: "ongoing",
            project_type: "Full Stack",
        },
        {
            title: "Hamro Khata",
            description: "Developing a mobile expense tracking app that helps users record daily spending, manage categories, and keep financial habits organized. The app focuses on simplicity, secure data storage, and an easy way to view spending history and summaries.",
            github: "https://github.com/meenfa/hamro-khata-mobile-app",
            tags: ["React Native", "Django", "PostgreSQL"],
            status: "ongoing",
            project_type: "Full Stack",
        },
    ];

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.project_type === filter);

    return (
        <section className="py-8 bg-white pt-0">
            <div className="mx-auto px-2 max-w-2xl">
                <h2 className="text-2xl font-bold text-black mb-6">Upcoming Projects</h2>

                {/* Single column layout with border separation */}
                <div className="flex flex-col divide-y divide-gray-600">
                    {projects.map((project, index) => (
                        <div key={index} className="py-5">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 flex-wrap mb-1">
                                            <h3 className="text-base font-bold text-black">{project.title}</h3>
                                            <span className="text-[10px] px-2 py-0.5 border border-dotted rounded-full bg-amber-100 border-amber-300">
                                                Building
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
                                        {project.github && (
                                            <a 
                                                href={project.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="text-gray-600 hover:text-black transition"
                                                title="View GitHub repository"
                                            >
                                                <Github className="w-4 h-4" />
                                            </a>
                                        )}
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
                    ))}
                </div>

                <div className="mt-6 text-center">
                    <p className="text-gray-600 text-sm">
                        View all projects at{' '}
                        <a
                            href="https://github.com/meenfa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                text-gray-800 font-normal text-xs
                                border border-gray-800/60 border-dashed 
                                bg-white/20 backdrop-blur-sm
                                rounded-lg px-3 py-1.5 
                                shadow-[inset_0_1px_3px_rgba(0,0,0,0.12)]
                                hover:shadow-[inset_0_0_12px_2px_rgba(0,0,0,0.24)]
                                hover:bg-white/30 
                                hover:text-gray-900
                                transition-all duration-200 
                                inline-flex items-center gap-1
                            "
                        >
                            <Github className="w-4 h-4" />
                            meenfa
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default UpcomingProjects;