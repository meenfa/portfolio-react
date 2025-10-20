import React from 'react';
import { Github, Linkedin, Twitter, Mail, Download, Dot, X } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="flex items-center py-8 bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto px-2 w-full max-w-3xl">
        <div className="space-y-8">
          <div className="space-y-4 text-black">
            <h1 className='text-3xl font-extrabold text-wrap'>
              Ankit Karki
              <span onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className='text-xs px-2 py-1 text-black font-normal border-2 border-blue-600 rounded-lg ml-4 cursor-pointer'>
                Available for work
              </span>
              
            </h1>
            
            <p className='text-base text-wrap'>
              Hi, I'm Ankit, a <span className="text-blue-400 font-bold">Backend Developer</span> and occasional poet from Kathmandu, Nepal 🇳🇵. I enjoy turning ideas into reality through code and love taking on challenges that push me to grow.
            </p>
            <p className='text-base text-wrap'>
              I work mainly with <span className="text-blue-400 font-bold">Django, Python, React.js, and Laravel</span>, focusing on building scalable, reliable, and well-structured web applications.
            </p>
            <p className='text-base text-wrap'>
              Right now, I'm working on <span className="text-blue-400 font-bold underline"><a href="https://github.com/ankitkarki27/eLearning-Platform-django-react">Digital Padhai</a></span>, a Full Stack LMS platform where I'm handling both backend and frontend development.
            </p>
            
          </div>

          <div className="flex flex-wrap gap-0 space-x-0 pt-0">
            <a
              href="https://drive.google.com/file/d/1BSCrZHHkZtsSkV5M2qYXZ4f9Fx-aoh45/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-black transition-colors border border-gray-800 text-sm hover:bg-gray-50"
            >
              <Download className="w-5 h-5" />
              <span>Resume</span>
            </a>

            <a
              href="https://github.com/ankitkarki27"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-800 hover:text-black transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/ankitkarki27/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-800 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://x.com/meenfaforlife"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 text-gray-800 hover:text-white-600 transition-colors"
            >
              <Twitter className="w-5 h-5" />
              {/* <X className="w-5 h-5" /> */}
            </a>
            <a
              href="mailto:ankitkarki8088@gmail.com"
              className="flex items-center justify-center w-10 h-10 text-gray-800 hover:text-red-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;