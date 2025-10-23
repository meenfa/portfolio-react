import React from 'react';
import { Github, Linkedin, Twitter, Mail,File, Download, X, FileBadge, } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="flex items-center py-8 bg-white/90 px-0 sm:px-6 lg:px-8">
      <div className="mx-auto px-2 w-full max-w-3xl">
        <div className="space-y-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Image - Above on mobile, Right on desktop */}
            <div className="w-full lg:w-1/3 flex justify-left order-first lg:order-last">
              <div className="w-32 h-32 lg:w-38 lg:h-42 rounded-full overflow-hidden border-1 border-gray-900 shadow-lime-100">
                <img
                  // src="/image/myphoto.jpg"
                  src="/image/a.png"
                  alt="Ankit Karki"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content - Below on mobile, Left on desktop */}
            <div className="w-full lg:w-4/3 space-y-4 text-black order-last lg:order-first">
              <h1 className='text-3xl font-bold text-wrap text-left lg:text-left flex items-center gap-3'>
                Ankit Karki
                <span
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className='text-xs px-2 py-1 text-black font-normal border-2 border-blue-600 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black transition-colors self-start mt-1'
                >
                  Available for work
                </span>
              </h1>

              <p className='text-base text-gray-600  text-wrap text-left lg:text-left'>
                Hi, I'm Ankit, a <span className="text-gray-900 font-semibold">Backend Developer</span> and occasional poet from Bhaktapur, Nepal 🇳🇵. I enjoy turning ideas into reality through code and love taking on challenges that push me to grow.
              </p>
              <p className='text-base text-gray-600 text-wrap text-left lg:text-left'>
                I am working mainly with <span className="text-gray-900 font-bold">Django, Python, React.js, and Laravel</span>, focusing on building scalable, reliable, and well-structured web applications.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-0 space-x-0 pt-0">
            <a
              href="https://drive.google.com/file/d/1BSCrZHHkZtsSkV5M2qYXZ4f9Fx-aoh45/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-black transition-colors border border-gray-800 text-sm hover:bg-gray-50"
            >
              <FileBadge className="w-5 h-5" />

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
              className="flex items-center justify-center w-10 h-10 text-gray-800 hover:text-white-600 transition-colors"
            >
              {/* <Twitter className="w-5 h-5" /> */}
              <img src="/image/x.svg" alt="Twitter" className="w-5 h-5" />

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