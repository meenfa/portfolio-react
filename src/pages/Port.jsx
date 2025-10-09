import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, ExternalLink } from 'lucide-react';

const Portfolio = () => {
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
        "Built a Construction Company Website using Laravel and React.js",
        "Developed backend APIs and managed database integration"
      ]
    }
  ];

  const projects = [
    { 
      name: 'Digital Padhai', 
      desc: "An online education platform for course enrollment and student progress tracking, designed to support community discussion forums and an AI-powered text interview module in future releases.",
      github: 'https://github.com/ankitkarki27/eLearning-Platform-django-react',
      live: null,
      tags: ['React', 'Django', 'PostgreSQL']
    },
    { 
      name: 'Rainbow Constructions', 
      desc: "Company site with admin dashboard for managing projects, blogs, and services. Fully responsive for all devices.",
      github: 'https://github.com/ankitkarki27/Construction-backend',
      live: 'https://rainbowconstructions.vercel.app/',
      tags: ['React', 'Laravel', 'MySQL']
    },
    { 
      name: 'Jobs Nepal', 
      desc: "Job portal where companies can post openings and users can browse and apply with ease.",
      github: 'https://github.com/ankitkarki27/job-portal',
      live: null,
      tags: ['Laravel', 'MySQL', 'Tailwind']
    },
    { 
      name: 'Trend-e-vision', 
      desc: "A Shopping platform with product browsing, cart, and checkout functionality.",
      github: 'https://github.com/ankitkarki27/dj-ecomstore.git',
      live: 'https://ankitkarki27.pythonanywhere.com/',
      tags: ['Django', 'PostgreSQL', 'Tailwind']
    },
    { 
      name: 'Bookmarker', 
      desc: "Tool to save, organize, and manage bookmarks in one place with a clean UI.",
      github: 'https://github.com/ankitkarki27/bookmarker',
      live: 'https://bookmarker-theta.vercel.app/',
      tags: ['React', 'Local Storage']
    },
    { 
      name: 'Donors Nepal', 
      desc: "Connects blood seekers with nearby donors using location-based matching.",
      github: 'https://github.com/ankitkarki27/Donors-Nepal.git',
      live: null,
      tags: ['PHP','MySQL']
    },
    { 
      name: 'Uthaoo', 
      desc: "Lets users schedule and manage household scrap pickups through an online dashboard.",
      github: 'https://github.com/ankitkarki27/uthaoo-Online-Scrap-Collection-System.git',
      live: null,
      tags: ['PHP', 'MySQL']
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-400 font-mono p-6 md:p-8 lg:p-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12">
          <h1 className="text-xl md:text-2xl text-white mb-4 md:mb-0">ankit karki</h1>
          <div className="flex gap-4 items-center">
            <a href="https://linkedin.com/in/ankitkarki27" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/ankitkarki27" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="https://x.com/meenfaforlife" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
            <a href="mailto:ankitkarki8088@gmail.com" className="hover:text-white transition-colors md:hidden">
              <Mail size={18} />
            </a>
            <span className="text-sm hidden md:block">ankitkarki8088@gmail.com</span>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-8 md:mb-12 space-y-2">
          <div className="flex gap-2">
            <span className="text-zinc-500">•</span>
            <p>
              <span className="text-zinc-500">backend</span> engineer based in{" "}
              <span className="text-white">Nepal</span>
            </p>
          </div>
          <div className="flex gap-2">
            <span className="text-zinc-500">•</span>
            <p>
              building <span className="text-white">Digital Padhai</span> - LMS platform
            </p>
          </div>
          <div className="flex gap-2">
            <span className="text-zinc-500">•</span>
            <p>focused on Django, Laravel & React</p>
          </div>
          <div className="flex gap-2">
            <span className="text-zinc-500">•</span>
            <p>available for work</p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-white text-lg md:text-xl mb-4 flex items-center gap-2">
                        skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 text-sm bg-zinc-800 rounded-full text-zinc-300">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-white text-lg md:text-xl mb-4 flex items-center gap-2">
           
            experience
          </h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-white">{exp.role}</h3>
                    <p className="text-zinc-500 text-sm">{exp.company}</p>
                  </div>
                  <span className="text-zinc-500 text-sm">{exp.period}</span>
                </div>
                <ul className="space-y-1 pl-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-zinc-500">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-white text-lg md:text-xl mb-4">projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="mb-2">
                  <span className="text-white">{project.name}</span>
                  <span className="mx-2">-</span>
                  <span>{project.desc}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-zinc-800 rounded text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-zinc-600 hover:text-white transition-colors"
                    title="View Code"
                  >
                    <Github size={14} />
                    <span className="text-sm">Github</span>
                  </a>
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-zinc-600 hover:text-white transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={14} />
                      <span className="text-sm">Live</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Writings */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-white text-lg md:text-xl mb-4 flex items-center gap-2">
          
            writings
          </h2>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center group">
              <a 
                href="https://lmsfisheryatesshuffledemopaper.karkiankit.com.np/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white mb-2 sm:mb-0 flex-1"
              >
                Enhancing Assessment Security and Fairness in Learning Management Systems through Fisher-Yates Shuffle Algorithm
              </a>
              <a 
                href="https://lmsfisheryatesshuffledemopaper.karkiankit.com.np/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-zinc-600 hover:text-white transition-colors"
              >
                <ExternalLink size={14} />
                <span className="text-sm">Read</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-white text-lg md:text-xl mb-4">contact</h2>
          <div className="space-y-2">
            <div className="flex gap-2 items-center">
              <span className="text-zinc-500">•</span>
              <a href="mailto:ankitkarki8088@gmail.com" className="hover:text-white flex items-center gap-2">
                <Mail size={16} />
                <span>ankitkarki8088@gmail.com</span>
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-zinc-500">•</span>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+977 9745941262</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-zinc-500">•</span>
              <span>Kathmandu, Nepal</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;