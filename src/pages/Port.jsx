import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, ExternalLink, Sun, Moon, FileText } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const skills = [
    "Python", "Django", "Laravel", "React", "PostgreSQL", "MySQL", 
    "RESTful APIs", "Git", "Tailwind CSS", "JavaScript", "PHP"
  ];

  const experience = [
    {
      role: "Laravel Developer (Intern)",
      company: "NepBigyapan",
      period: "Dec 2024 – April 2025",
      description: [
        "Gained hands-on experience with Laravel and React",
        "Worked on a College Management System project built with Laravel.",
        "Developed backend features for student enrollment and course management.",
        "Implemented authentication, validation, and database relationships.",
      ]
    }
  ];

  const projects = [
    {
      title: "Digital Padhai",
      description: "An online learning platform for course enrollment and progress tracking, built with plans for forums and AI interview features.",
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
      title: "Donors Nepal",
      description: "Connects blood seekers with nearby donors using location-based matching.",
      tags: ["PHP", "MySQL"],
      github: "https://github.com/ankitkarki27/Donors-Nepal.git",
      image: "/image/project-dn3.jpg",
      status: "completed",
      project_type: "Backend"
    },
  ];

  const writings = [
    {
      title: "Enhancing Assessment Security and Fairness in Learning Management Systems through Fisher-Yates Shuffle Algorithm",
      link: "https://lmsfisheryatesshuffledemopaper.karkiankit.com.np/",
      description: "A technical paper on improving assessment security in LMS platforms"
    }
  ];

  const renderProjects = () => (
    <div className="space-y-8">
      {projects.map((project, index) => (
        <div key={index} className="group border-l-2 border-gray-300 dark:border-zinc-700 pl-4 hover:border-gray-500 dark:hover:border-zinc-400 transition-colors">
          <div className="mb-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <span className="text-gray-900 dark:text-white text-sm font-medium">{project.title}</span>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  project.status === 'completed' 
                    ? 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300' 
                    : 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300'
                }`}>
                  {project.status}
                </span>
                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                  {project.project_type}
                </span>
              </div>
            </div>
            <p className="text-gray-600 text-sm dark:text-zinc-400 mb-3">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 text-xs bg-gray-200 dark:bg-zinc-800 rounded-full text-gray-700 dark:text-zinc-300">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github size={12} />
              <span className="text-xs">Code</span>
            </a>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ExternalLink size={12} />
                <span className="text-xs">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const renderExperience = () => (
    <div className="space-y-6">
      {experience.map((exp, index) => (
        <div key={index} className="border-l-2 border-gray-300 dark:border-zinc-700 pl-4 hover:border-gray-500 dark:hover:border-zinc-400 transition-colors">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
            <div>
              <h3 className="text-gray-900 dark:text-white text-sm font-medium">{exp.role}</h3>
              <p className="text-gray-600 text-sm dark:text-zinc-400">{exp.company}</p>
            </div>
            <span className="text-gray-500 dark:text-zinc-500 text-sm mt-1 sm:mt-0">{exp.period}</span>
          </div>
          <ul className="space-y-1">
            {exp.description.map((item, i) => (
              <li key={i} className="flex gap-3">
                {/* <span className="text-gray-500 dark:text-zinc-500 mt-1 flex-shrink-2">•</span> */}
                <span className="text-gray-800 dark:text-zinc-400 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderSkills = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <div 
          key={index} 
          className="bg-gray-200 dark:bg-zinc-800 rounded-lg p-4 text-center hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors cursor-default"
        >
          <span className="text-gray-700 dark:text-zinc-300">{skill}</span>
        </div>
      ))}
    </div>
  );

  const renderWritings = () => (
    <div className="space-y-6">
      {writings.map((writing, index) => (
        <div key={index} className="border-l-2 border-gray-300 dark:border-zinc-700 pl-4 hover:border-gray-500 dark:hover:border-zinc-400 transition-colors">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
            <div className="flex-1">
              <h3 className="text-gray-900 dark:text-white text-sm font-medium mb-2">
                {writing.title}
              </h3>
              <p className="text-gray-600 dark:text-zinc-400 text-sm mb-3">
                {writing.description}
              </p>
            </div>
          </div>
          <a 
            href={writing.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ExternalLink size={16} />
            <span className="text-sm">Read Paper</span>
          </a>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 transition-colors duration-300">
      <div className="max-w-3xl mx-auto p-6 md:p-8 lg:p-12">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-4">
          <div>
            <h1 className="text-xl md:text-2xl text-gray-900 dark:text-white mb-1">Ankit Karki</h1>
            <p className="text-gray-500 dark:text-zinc-500 text-sm">Full Stack Developer</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {/* Resume Link */}
            <a
              href="/resume.pdf" // Update this path to your actual resume file
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 rounded-lg transition-colors text-gray-700 dark:text-zinc-300"
            >
              <FileText size={18} />
              <span>Resume</span>
            </a>
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-2 md:mb-4 space-y-3">
          <div className="flex gap-2">
            <span className="text-gray-500 dark:text-zinc-500 mt-1">•</span>
            <p>
              Full Stack Developer from <span className="text-gray-900 dark:text-white">Bhaktapur, Nepal</span>
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-gray-500 dark:text-zinc-500 mt-1">•</span>
            <p>
              Focused on <span className="text-gray-900 dark:text-white">Django, Laravel & React</span>
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-gray-500 dark:text-zinc-500 mt-1">•</span>
            <p>
              Available for <span className="text-gray-900 dark:text-white">work</span>
            </p>
          </div>
        </section>

        {/* Contact Icons - Moved below About section */}
        <section className="mb-2 md:mb-4">
          <div className="flex justify-left gap-4">
            <a href="https://linkedin.com/in/ankitkarki27" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-200 dark:bg-zinc-800 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors">
              <Linkedin size={20} className="text-gray-700 dark:text-zinc-300" />
            </a>
            <a href="https://github.com/ankitkarki27" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-200 dark:bg-zinc-800 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors">
              <Github size={20} className="text-gray-700 dark:text-zinc-300" />
            </a>
            <a href="https://x.com/meenfaforlife" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-200 dark:bg-zinc-800 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors">
              <Twitter size={20} className="text-gray-700 dark:text-zinc-300" />
            </a>
            <a href="mailto:ankitkarki8088@gmail.com" className="p-3 bg-gray-200 dark:bg-zinc-800 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors">
              <Mail size={20} className="text-gray-700 dark:text-zinc-300" />
            </a>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="mb-4 dark:border-zinc-700">
          <nav className="flex space-x-4">
            {['projects', 'experience', 'skills', 'writings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-gray-900 dark:border-white font-bold text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-500 dark:text-zinc-500 hover:text-gray-700 dark:hover:text-zinc-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Sections */}
        <section className="mb-8 md:mb-12">
          {activeTab === 'projects' && renderProjects()}
          {activeTab === 'experience' && renderExperience()}
          {activeTab === 'skills' && renderSkills()}
          {activeTab === 'writings' && renderWritings()}
        </section>

        {/* Contact Info */}
        <section>
          <h2 className="text-gray-900 dark:text-white text-lg md:text-xl mb-4">Contact</h2>
          <div className="space-y-3">
            <div className="flex gap-3 items-center">
              <span className="text-gray-500 dark:text-zinc-500">•</span>
              <a href="mailto:ankitkarki8088@gmail.com" className="hover:text-gray-900 dark:hover:text-white flex items-center gap-3">
                <Mail size={18} />
                <span>ankitkarki8088@gmail.com</span>
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-gray-500 dark:text-zinc-500">•</span>
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+977 9745941262</span>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-gray-500 dark:text-zinc-500">•</span>
              <span>Kathmandu, Nepal</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;