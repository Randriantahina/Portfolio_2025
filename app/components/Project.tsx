import React from 'react';
import Image from 'next/image';
import { AiOutlineGithub } from 'react-icons/ai';
import Reveal from './Reveal';

const projects = [
  {
    img: '/TODO-List.png',
    title: 'Project 1',
    description:
      'Todo List with authentication built using React.js, Express, and MySQL.',
    links: {
      github: 'https://github.com/Randriantahina/react-express.git',
    },
  },
  {
    img: '/e.jpg',
    title: 'Project 2',
    description: 'E-commerce website built with Laravel, React, and MySQL.',
    links: {
      github: 'https://github.com/Randriantahina/laravel-e-commerce.git',
    },
  },
  {
    img: '/stocks.jpg',
    title: 'Project 3',
    description: 'A fullstack project developed with Next.js.',
    links: {
      github: 'https://github.com/Randriantahina/next-js-gestion_de_stock.git',
    },
  },
  {
    img: '/portfolio.png',
    title: 'Project 4',
    description: 'My personal portfolio website.',
    links: {
      github: '#',
    },
  },
];

const Project = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">
        My side fun projects
      </h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
              <div className="relative w-full h-[200px] md:w-[400px] md:h-[250px]">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  style={{
                    boxShadow: '0 8px 32px 0 rgba(128, 90, 213, 0.5)', // purple shadow
                  }}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.links.github}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Project;
