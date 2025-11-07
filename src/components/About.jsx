import React from 'react';
import { Github, Linkedin, Twitter, Mail, File, Download, X, FileBadge, LucideFileX, LucideFile } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative flex items-center py-8  sm:px-6 lg:px-8">

      <div className="mx-auto px-2 w-full max-w-2xl relative z-10">
        <div className="space-y-2">
          <div className="flex flex-col lg:flex-row gap-8 items-center">

            <div className="w-full lg:w-1/3 flex justify-left order-first lg:order-last">
              <div className="w-32 h-32 lg:w-32 lg:h-38 rounded-full overflow-hidden border-1 border-gray-300">
                <img
                  src="/image/ankit1.png"
                  alt="Ankit Karki"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-4/3 mb-2 space-y-2 text-black order-last lg:order-first">
              <h1 className='text-xl font-medium text-wrap text-left lg:text-left flex items-center gap-2'>
                Hi, I'm Ankit  
                <span
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className='flex items-center gap-1 text-xs px-3 py-1 text-blue-600 font-semibold border-2 border-blue-600 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-blue-600 transition-all duration-200'
                >
                  <span className='w-2 h-2 bg-blue-500 rounded-full inline-block'></span>
                  Available for work
                </span>
              </h1>
              <p className='text-gray-500 leading-relaxed text-wrap mt-4'>
                I'm a <span className="text-gray-900 font-medium">Full Stack Developer</span> from Bhaktapur, Nepal 🇳🇵. I craft modern web applications using <span className="text-gray-900 font-medium">Django, React.js, Python,</span> and <span className="text-gray-900 font-medium">Laravel</span>.
              </p>

              <p className='text-gray-400 leading-relaxed text-wrap'>
                Say hi at{' '}
                <a
                  href="mailto:ankitkarki8088@gmail.com"
                  className="text-gray-900  font-medium border-b-2 border-black transition-all"
                >
                  ankitkarki8088@gmail.com
                </a>
              </p>

            </div>
          </div>

          <div className="flex flex-wrap gap-1 items-center pt-2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-black transition-all border-1 border-gray-700 text-sm hover:bg-gray-200 hover:shadow-sm bg-white/80 backdrop-blur-sm relative group"
            >
              <LucideFile  className='w-4 h-4'/>
              <span>Resume / CV</span>

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
              href="https://x.com/ankitdotnp"
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