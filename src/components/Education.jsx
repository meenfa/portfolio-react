import React from 'react';

const Education = () => {
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

  const sectionStyle = {
    scrollMarginTop: '4rem'
  };

  return (
    <section
      id="education"
      style={sectionStyle}
      className="py-16"
    >
      <div className="mx-auto px-2 w-full max-w-3xl">
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
      </div>
    </section>
  );
};

export default Education;
