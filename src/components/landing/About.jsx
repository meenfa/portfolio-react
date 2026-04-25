import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="mx-auto px-4 max-w-2xl">
        <h2 className="text-xl font-bold text-black mb-6">About me</h2>  
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start">
          {/* Square Image */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <div className="w-40 h-48 lg:w-48 lg:h-56 overflow-hidden">
              <img
                src="/image/ankit1.png"
                alt="Ankit Karki"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Short Description */}
          <div className="w-full lg:w-2/3 space-y-4">
            <h3 className="text-lg font-semibold text-black">Ankit Karki</h3>
            
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>
                I am a Full Stack Developer based in Bhaktapur, Nepal, specializing in building modern web applications 
                using Django, React, Python, and Laravel.
              </p>
              
              <p>
                I focus on creating clean, efficient, and scalable solutions that meet both user needs and business objectives.
                When not coding, I enjoy writing poetry and exploring Data Science and AI technologies.
              </p>

              <p className="text-black font-medium">
                Open to freelance projects and collaborative opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;