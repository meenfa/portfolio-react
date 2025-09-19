import React, { useState } from 'react';
import { Github, Linkedin, ExternalLink, Mail, Phone, MapPin, Download, File, DownloadIcon, Twitter, X, XIcon } from 'lucide-react';
// import { Badge } from "@/components/ui/badge"

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = [
    "Python", "Django", "Laravel", "React", "PostgreSQL",
    "MySQL", "Postman", "Github"
  ];
  const education = [
    {
      level: "Bachelor of Computer Applications",
      school: "Tribhuvan University, Kathmandu, Nepal",
      date: "2020 - Present"
    },
    {
      level: "High School",
      school: "Kantipur Secondary School, Biratnagar, Nepal",
      date: "2017 - 2019"
    },
  ];

  const projects = [
    {
      title: "Digital Padhai",
      description: "An online platform for course enrollment and student progress tracking, designed to support community discussion forums and an AI-powered text interview module in future releases.",
      tags: ["React", "Django", "PostgreSQL", "RTK", "Tailwind"],
      github: "https://github.com/ankitkarki27/eLearning-Platform-django-react",
      image: "/image/padhai.png"
    },
    {
      title: "Rainbow Constructions",
      description: "Company site with admin dashboard for managing projects, blogs, and services. Fully responsive for all devices.",
      tags: ["React", "Laravel", "MySQL", "Tailwind"],
      github: "https://github.com/ankitkarki27/Construction-backend",
      link: "https://rainbowconstructions.vercel.app/",
      image: "/image/construction-company.png"
    },
    {
      title: "Jobs Nepal",
      description: "Job portal where companies can post openings and users can browse and apply with ease.",
      tags: ["Laravel", "MySQL", "Tailwind CSS"],
      github: "https://github.com/ankitkarki27/job-portal",
      image: "/image/project-jobsnepal.png"
    },
    {
      title: "Trend-e-vision: E-commerce App",
      description: "Shopping platform with product browsing, cart, and checkout functionality.",
      tags: ["Django", "Tailwind CSS", "PostgreSQL"],
      github: "https://github.com/ankitkarki27/dj-ecomstore.git",
      link: "https://ankitkarki27.pythonanywhere.com/",
      image: "/image/project-trendy.png"
    },
    {
      title: "Bookmarker",
      description: "Tool to save, organize, and manage bookmarks in one place with a clean UI.",
      tags: ["React"],
      github: "https://github.com/ankitkarki27/bookmarker",
      link: "https://bookmarker-theta.vercel.app/",
      image: "/image/project-bookmarker.jpg"
    },
    {
      title: "Donors Nepal",
      description: "Connects blood seekers with nearby donors using location-based matching.",
      tags: ["PHP", "Laravel", "MySQL"],
      github: "https://github.com/ankitkarki27/Donors-Nepal.git",

      image: "/image/project-dn3.jpg"
    },
    {
      title: "Uthaoo: Online Scrap Collection System",
      description: "Lets users schedule and manage household scrap pickups through an online dashboard.",
      tags: ["PHP", "MySQL"],
      github: "https://github.com/ankitkarki27/uthaoo-Online-Scrap-Collection-System.git",
      date: "2023",
      image: "/image/project-uthaoo.jpg"
    }
  ];
  const experience = [
    {
      role: "Laravel Developer (Intern)",
      company: "NepBigyapan",
      period: "Dec 2024 – April 2025",
      description: [

        "Gained hands-on experience with Laravel and React",
        "Built a Construction Company Website using both backend and frontend using Laravel and React.js.",
        "Developed backend APIs and managed database integration efficiently.",
        // "Designed responsive UI with HTML, CSS, and JavaScript.",

      ],
      tags: ["Laravel", "Django", "RESTful APIs", "Full-stack Development"]
    },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };


  const sectionStyle = {
    scrollMarginTop: '4rem'
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <nav className="fixed top-0 w-full  bg-black/90 backdrop-blur-md z-50 h-16">
        <div className="mx-auto px-2 max-w-3xl h-full">
          <div className="flex justify-between items-center h-full">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => scrollToSection('about')}
            >
              <span className="text-xl font-bold text-white">अंकित.</span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {['about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium cursor-pointer transition-colors ${activeSection === section ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-white focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black absolute top-16 w-full">
            <div className="px-6 py-2 space-y-2">
              {['about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-2 text-sm font-medium ${activeSection === section ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="pt-12">

        {/* About*/}
        <section
          id="about"
          style={sectionStyle}
          className="flex items-center"
        >
          <div className="mx-auto px-2 py-16 w-full max-w-3xl">
            <div className="space-y-8">

              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">

                <div className="sm:hidden flex justify-center">
                  <div className="bg-black hover:bg-gray-900 border-lg border border-gray-400 text-white px-4 py-2 rounded-lg text-sm font-thin shadow-lg flex items-center space-x-2 cursor-pointer">

                    <span>Available For Work</span>
                  </div>
                </div>

                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:block relative">
                      <img
                        src="/image/myphoto.jpg"
                        alt="Ankit Karki"
                        className="w-24 h-24 object-cover rounded-full shadow-lg border border-gray-700"
                      />
                      {/* Floating Tech Badges with Animation */}
                      {/* <div className="absolute -top-2 -left-6 animate-float-vertical">
                        <span className="px-2 py-1 bg-black text-white font-mono rounded-lg border border-gray-700 text-xs shadow-md">
                          Django
                        </span>
                      </div>
                      <div className="absolute -bottom-2 -left-4 animate-float-horizontal-reverse">
                        <span className="px-2 py-1 bg-black text-white text-xs font-mono rounded-lg border border-gray-700 shadow-md">
                          React
                        </span>
                      </div>
                      <div className="absolute -bottom-2 -right-4 animate-float-vertical-reverse">
                        <span className="px-2 py-1 bg-black text-white text-xs font-mono rounded-lg border border-gray-700 shadow-md">
                          Laravel
                        </span>
                      </div> */}
                    </div>

                    <div>
                      <h1 className="text-3xl font-bold text-white">Ankit Karki <span className="ml-2 text-sm bg-black hover:bg-gray-900 border-lg border border-gray-700 text-white font-thin px-2 py-1 rounded-lg cursor-pointer">Available for Work</span></h1>
                      <p className="text-gray-400 text-lg">Backend Developer</p>
                      {/* <p className="text-gray-400 text-sm">ankitkarki8088@gmail.com</p> */}
                    </div>
                  </div>

                  {/* Contact Info - Removed location */}
                  <div className="flex flex-wrap gap-4 items-center pt-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">ankitkarki8088@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">Kathmandu, Nepal</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio Text */}
              <div className="space-y-4 text-gray-200 pt-0">
                <p className='text-base text-wrap'>
                  Hi, I'm Ankit, a passionate <span className="text-white">Backend Developer</span> with very good knowledge in
                  <span className="text-white font-base"> Django, Python, Laravel and React.js</span> and building scalable web applications.
                  
                </p>

                <p className='text-base text-wrap'>
                My focus is on developing efficient APIs, optimizing database performance, and implementing
                  secure authentication systems.
                </p>
                <p className='text-base text-wrap'>
                  Currently working on <span className="text-gray-200 font-base"><a href="https://github.com/ankitkarki27/eLearning-Platform-django-react">Digital Padhai </a></span>, a LMS platform where I lead both backend and frontend development. I'm also interested in exploring new technologies and contributing to open-source projects.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-0 space-x-0 pt-0">
                <a
                  href="https://drive.google.com/file/d/1Dpxxay05_CvITZHxbg1IAcxX7aNgME35/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-black hover:bg-gray-200 px-4 py-2 rounded-lg text-white hover:text-black transition-colors border border-gray-700 text-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </a>

                <a
                  href="https://github.com/ankitkarki27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-300 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/ankitkarki27/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg  text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="https://x.com/meenfaforlife"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10  text-gray-300 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto px-2 py-4 pb-32 space-y-16 max-w-3xl">
          {/* Skills Section */}
          <section
            id="skills"
            style={sectionStyle}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Stacks</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-lg border border-gray-700 bg-black text-gray-200 text-sm cursor-pointer hover:bg-gray-800 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section
            id="experience"
            style={sectionStyle}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-gray-500 pl-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="font-semibold">{exp.role}</h3>
                    <span className="text-gray-400 text-sm">{exp.period}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{exp.company}</p>
                  <ul className="mt-4 text-sm space-y-2 list-disc pl-5">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* projects */}
          <section id="projects" style={sectionStyle}>
            <h2 className="text-2xl font-bold text-white mb-6">Projects</h2>
            <div className="grid gap-12">
              {projects.map((project, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Project Image */}
                    <div className="w-full lg:w-5/12 overflow-hidden rounded-lg border border-gray-800">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover transition-opacity duration-500 hover:opacity-90"
                      />
                    </div>
                    {/* Project Details */}
                    <div className="w-full lg:w-7/12">
                      <h3 className="text-xl font-light text-white mb-3">{project.title}</h3>
                      <p className="text-gray-400 mb-5 text-sm text-wrap">{project.description}</p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 text-xs text-gray-400 bg-gray-900 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Project Links */}
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-xs text-gray-400 hover:text-white transition-colors"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-xs text-gray-400 hover:text-white transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Divider - Hidden for last item */}
                  {index !== projects.length - 0 && (
                    <div className="mt-12 border-t border-gray-800"></div>
                  )}
                </div>
              ))}
            </div>

          </section>

          <section
            id="education"
            style={sectionStyle}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Education</h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-gray-500 pl-4">
                  <h3 className="font-semibold text-white">{edu.level}</h3>
                  <p className="text-gray-400 text-sm">{edu.school}</p>
                  <p className="text-gray-500 text-xs mt-1">{edu.date}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            style={sectionStyle}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-white">Get in touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">ankitkarki8088@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">+977 9745941262</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">Kathmandu, Nepal</span>
                  </div>
                </div>
                <div className="flex space-x-2 pt-2">
                  <a
                    href="https://github.com/ankitkarki27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-black text-gray-300 hover:text-white transition-colors border border-gray-700"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ankitkarki27/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-black text-gray-300 hover:text-white transition-colors border border-gray-700"
                  >
                    <Linkedin className="w-4 h-4" />

                  </a>
                  <a
                    href="https://drive.google.com/file/d/1Dpxxay05_CvITZHxbg1IAcxX7aNgME35/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-black hover:bg-gray-200 px-4 py-2 rounded-lg text-white hover:text-black transition-colors border border-gray-700 text-sm"
                  >
                    <DownloadIcon className="w-4 h-4" />
                    <span>Resume</span>
                  </a>


                </div>
              </div>

              <div className="bg-black/50 p-4 rounded">
                <h3 className="font-semibold text-white mb-3">Send me a message</h3>
                <form
                  action="https://formspree.io/f/xdkzgjjl"
                  method="POST"
                  className="space-y-3"
                >
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 bg-black border border-gray-600 rounded text-white focus:outline-none focus:ring-1 focus:ring-gray-500 text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 bg-black border border-gray-600 rounded text-white focus:outline-none focus:ring-1 focus:ring-gray-500 text-sm"
                      placeholder="your.email@gmail.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      required
                      className="w-full px-3 py-2 bg-black border border-gray-600 rounded text-white focus:outline-none focus:ring-1 focus:ring-gray-500 text-sm"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-black hover:bg-gray-900 border border-gray-600 rounded text-white focus:outline-none focus:ring-1 focus:ring-gray-500 text-sm font-medium transition-colors cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-4 text-gray-400">
          <div className="mx-auto px-6 text-center text-xs max-w-3xl">
            © {new Date().getFullYear()} Ankit Karki. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;