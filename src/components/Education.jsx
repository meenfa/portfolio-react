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

  return (
    <section id="education" className="py-16 bg-white pt-2">
      <div className="mx-auto px-2 max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-black">Education</h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-gray-400 pl-4">
              <h3 className="font-semibold text-black">{edu.level}</h3>
              <p className="text-gray-600 text-sm italic">{edu.school}</p>
              <p className="text-gray-500 text-xs mt-1">{edu.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;