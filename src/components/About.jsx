import React from 'react';
import { Github, Linkedin, Twitter, Mail, File, Download, X, FileBadge } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative flex items-center py-8 grain-backgroundpx-0 sm:px-6 lg:px-8">

      <div className="mx-auto px-2 w-full max-w-3xl relative z-10">
        <div className="space-y-2">
          <div className="flex flex-col lg:flex-row gap-8 items-center">

            <div className="w-full lg:w-1/3 flex justify-left order-first lg:order-last">
              <div className="w-32 h-32 lg:w-38 lg:h-42 rounded-full overflow-hidden border-1 border-gray-300">
                <img
                  src="/image/ankit1.png"
                  alt="Ankit Karki"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-4/3 space-y-2 text-gray-800 order-last lg:order-first">
              <h1 className='text-xl font-bold text-wrap text-left lg:text-left flex items-center gap-2'>
                Hi, I'm Ankit Karki
                {/* <span
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className='text-xs px-2 py-1 text-blue-600 font-normal border-2 border-blue-600 rounded-lg cursor-pointer hover:bg-gray-50 hover:text-blue-500 transition-colors self-start mt-1 '
                >
                  Available for work
                </span> */}
                <span
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className='flex items-center gap-1 text-xs px-3 py-1 text-blue-600 font-semibold border-2 border-blue-600 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-blue-600 transition-all duration-200'
                >
                  <span className='w-2 h-2 bg-blue-500 rounded-full inline-block'></span>
                  Available for work
                </span>
              </h1>

              <p className='text-gray-500 leading-relaxed text-wrap'>
                I'm a <span className="text-gray-800 font-semibold">Full Stack Developer</span> from Bhaktapur, Nepal 🇳🇵. I build functional web applications with <span className="text-gray-900 font-bold">Django, Python, React.js, and Laravel</span> that are reliable, scalable, and impactful.
              </p>

            </div>
          </div>

          <div className="flex flex-wrap gap-1 items-center pt-0">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-black transition-all border border-gray-700 text-sm hover:bg-gray-50 hover:shadow-sm bg-white/80 backdrop-blur-sm relative group"
            >
              {/* <FileBadge className="w-5 h-5" /> */}
              <span>Resume</span>

              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gray-300 text-black text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                View my resume
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-300"></div>
              </div>
            </a>

            <a
              href="https://github.com/ankitkarki27"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:text-black transition-all hover:bg-white/80 backdrop-blur-sm border border-transparent hover:border-gray-300 relative group"
            >
              <Github className="w-5 h-5" />

              {/* Tooltip */}
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-300 text-gray-800 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                GitHub
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-300"></div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ankitdotnp/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:text-blue-600 transition-all hover:bg-white/80 backdrop-blur-sm border border-transparent hover:border-gray-300 relative group"
            >
              <Linkedin className="w-5 h-5" />
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-300 text-gray-800 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Linkedin
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-300"></div>
              </div>
            </a>

            <a
              href="https://x.com/meenfaforlife"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:text-black transition-all hover:bg-white/80 backdrop-blur-sm border border-transparent hover:border-gray-300 group"
            >
              <img src="/image/x.svg" alt="Twitter" className="w-4 h-4" />
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-300 text-gray-800 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                twitter / X
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-300"></div>
              </div>
            </a>

            <a
              href="mailto:ankitkarki8088@gmail.com"
              className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:text-red-600 transition-all hover:bg-white/80 backdrop-blur-sm border border-transparent hover:border-gray-300 group"
            >
              <Mail className="w-5 h-5" />
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-300 text-gray-800 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Email
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-300"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;