import React from 'react';
import { DiSass, DiReact, DiNodejsSmall, DiMongodb } from 'react-icons/di';
import { RiTailwindCssFill } from 'react-icons/ri';
import { RiNextjsFill } from 'react-icons/ri';
import { FaLaravel } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import Reveal from './Reveal';

const skills = [
  {
    category: 'Frontend',
    technologies: [
      {
        name: 'React.Js',
        icon: (
          <DiReact
            className="text-blue-500 animate-spin"
            style={{ animationDuration: '10s' }}
          />
        ),
      },
      {
        name: 'TailwindCss',
        icon: <RiTailwindCssFill className="text-blue-600" />,
      },
      { name: 'Sass', icon: <DiSass className="text-pink-600" /> },
      { name: 'Next.Js', icon: <RiNextjsFill className="" /> },
    ],
  },
  {
    category: 'Backend',
    technologies: [
      {
        name: 'Express.js',
        icon: <DiNodejsSmall className="text-green-500" />,
      },
      { name: 'MongoDB', icon: <DiMongodb className="text-green-600" /> },
      { name: 'Laravel', icon: <FaLaravel className="text-red-500" /> },
      { name: 'Mysql', icon: <SiMysql className="text-blue-600" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[650px] mx-auto flex flex-col justify-center items-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">I love worked on..... .</p>

        <div
          className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        "
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full md:w-1/2"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
