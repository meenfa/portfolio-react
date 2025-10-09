import React from 'react';
import { Github, Linkedin, Twitter, Mail, Download, Dot } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="flex items-center py-12 bg-white">
      <div className="mx-auto px-2 w-full max-w-3xl">
        <div className="space-y-8">
          {/* <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-4">
                <div className="hidden sm:block relative">
                  <img
                    src="/image/myphoto.jpg"
                    alt="Ankit Karki"
                    className="w-32 h-32 object-cover rounded-full"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-semibold text-black">
                    Ankit Karki
                
                    <span className="text-xs text-blue-900 font-normal px-0 py-2 cursor-pointer ">

                      <Dot className="inline-block w-8 h-8 text-blue-800" />
                      Available for Work
                    </span>
                  </h1>
                  <p className="text-gray-600 text-base">Backend Developer</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-800 text-sm">ankitkarki8088@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="space-y-4 text-gray-800 pt-0">
            <p className='text-xl text-wrap'>
              Hi, I'm Ankit, a <span className="text-black font-bold">Backend Developer</span> from Kathmandu, Nepal 🇳🇵. I enjoy turning ideas into reality through code and love taking on challenges that push me to grow.
            </p>
            <p className='text-base text-wrap'>
              I work mainly with <span className="text-black font-semibold">Django, Python, React.js, and Laravel</span>, focusing on building scalable, reliable, and well-structured web applications.
            </p>
            <p className='text-base text-wrap'>
              Right now, I'm working on <span className="text-black font-semibold underline"><a href="https://github.com/ankitkarki27/eLearning-Platform-django-react">Digital Padhai</a></span>, a Full Stack LMS platform where I'm handling both backend and frontend development.
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
              className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-800 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://x.com/meenfaforlife"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 text-gray-800 hover:text-black transition-colors"
            >
              <Twitter className="w-5 h-5" />
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

export default Home;