import React from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, Download, MailIcon } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="flex items-center py-12 bg-white/85">
      {/* <section className="flex items-center py-16 bg-white"> */}
      <div className="mx-auto px-2 w-full max-w-3xl">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">

            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-4">
                <div className="hidden sm:block relative">
                  <img
                    src="/image/myphoto.jpg"
                    alt="Ankit Karki"
                    className="w-24 h-24 object-cover rounded-full "
                  />
                </div>

                <div>
                  <h1 className="text-3xl font-semibold text-black">
                    Ankit Karki
                    <span className="ml-4 text-xs bg-black hover:bg-gray-800 text-white font-thin px-2 py-2 rounded-lg cursor-pointer border-1 border-gray-200">
                      Available for Work
                    </span>
                  </h1>
                  <p className="text-gray-600 text-base">Backend Developer</p>
                  
                </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center pt-1 ">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-gray-800" />
                  <span className="text-gray-800 text-sm"> ankitkarki8088@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gray-800" />
                  <span className="text-gray-800 text-sm">Kathmandu, Nepal</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-gray-800 pt-0">
            <p className='text-base text-wrap'>
              Hi, I'm Ankit, a passionate <span className="text-black font-bold">Backend Developer</span> with very good knowledge in
              <span className="text-black font-semibold"> Django, Python, Laravel and React.js</span> and building scalable web applications.
            </p>
            <p className='text-base text-wrap'>
              My focus is on developing efficient APIs, optimizing database performance, and implementing
              secure authentication systems.
            </p>
            <p className='text-base text-wrap'>
              Currently working on <span className="text-black font-semibold underline"> <a href="https://github.com/ankitkarki27/eLearning-Platform-django-react">Digital Padhai</a></span>, a Full Stack LMS platform where Iam working both backend and frontend development.
            </p>
          </div>

          <div className="flex flex-wrap gap-0 space-x-0 pt-0">
            <a
              href="https://drive.google.com/file/d/1Dpxxay05_CvITZHxbg1IAcxX7aNgME35/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2  px-4 py-2 rounded-lg text-black transition-colors border border-gray-800 text-sm hover:bg-gray-50"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>

            <a
              href="https://github.com/ankitkarki27"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 hover:text-black transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/ankitkarki27/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 hover:text-black transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://x.com/meenfaforlife"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-black transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:ankitkarki8088@gmail.com"
              className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-black transition-colors"
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