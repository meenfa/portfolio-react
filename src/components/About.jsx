import React from 'react';
import { Github, Linkedin, Twitter, Mail, File, Download, X, FileBadge } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative flex items-center py-8 grain-backgroundpx-0 sm:px-6 lg:px-8">

      <div className="mx-auto px-2 w-full max-w-3xl relative z-10">
        <div className="space-y-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">

            <div className="w-full lg:w-1/3 flex justify-left order-first lg:order-last">
              <div className="w-32 h-32 lg:w-38 lg:h-42 rounded-full overflow-hidden border-1 border-gray-800 shadow-lg shadow-gray-400/20">
                <img
                  src="/image/a.png"
                  alt="Ankit Karki"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

         
            <div className="w-full lg:w-4/3 space-y-4 text-black order-last lg:order-first">
              <h1 className='text-3xl font-bold text-wrap text-left lg:text-left flex items-center gap-3'>
                Ankit Karki
                <span
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className='text-xs px-2 py-1 text-black font-normal border-2 border-blue-600 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black transition-colors self-start mt-1 '
                >
                  Available for work
                 
                </span>
              </h1>

              <p className='text-lg text-gray-700 text-wrap text-left lg:text-left leading-relaxed'>
                Hi, I'm Ankit, a <span className="text-gray-900 font-semibold">Backend Developer</span> and occasional poet from Bhaktapur, Nepal 🇳🇵. I enjoy turning ideas into reality through code and love taking on challenges that push me to grow.
              </p>
              <p className='text-lg text-gray-700 text-wrap text-left lg:text-left leading-relaxed'>
                I am working mainly with <span className="text-gray-900 font-bold">Django, Python, React.js, and Laravel</span>, focusing on building scalable, reliable, and well-structured web applications.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-2 items-center pt-2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-black transition-all border border-gray-700 text-sm hover:bg-gray-50 hover:shadow-sm bg-white/80 backdrop-blur-sm"
            >
              <FileBadge className="w-5 h-5" />
              <span>Resume</span>
            </a>

            <a
              href="https://github.com/ankitkarki27"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:text-black transition-all hover:bg-white/80 backdrop-blur-sm border border-transparent hover:border-gray-300"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/ankitkarki27/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:text-blue-600 transition-all hover:bg-white/80 backdrop-blur-sm border border-transparent hover:border-gray-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://x.com/meenfaforlife"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:text-black transition-all hover:bg-white/80 backdrop-blur-sm border border-transparent hover:border-gray-300"
            >
              <img src="/image/x.svg" alt="Twitter" className="w-4 h-4" />
            </a>

            <a
              href="mailto:ankitkarki8088@gmail.com"
              className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:text-red-600 transition-all hover:bg-white/80 backdrop-blur-sm border border-transparent hover:border-gray-300"
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