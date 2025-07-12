'use client';
import React, { useState } from 'react';
import { AiOutlineGithub, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import TitleCard from './ui/TitleCard';
import Reveal from './Reveal';

const projects = [
  {
    img: '/TODO-List.png',
    title: 'todo project',
    description:
      'Todo List with authentication built using React.js, Express, and MySQL.',
    technos: ['React.js', 'Express', 'MySQL', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/Randriantahina/react-express.git',
    },
  },
  {
    img: '/e.jpg',
    title: 'e-commmerce project',
    description: 'E-commerce website built with Laravel, React, and MySQL.',
    technos: ['Laravel', 'React', 'MySQL', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/Randriantahina/laravel-e-commerce.git',
    },
  },
  {
    img: '/stocks.jpg',
    title: 'inventory management project',
    description: 'Inventory management project developed with Next.js.',
    technos: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'MySQL'],
    links: {
      github: 'https://github.com/Randriantahina/next-js-gestion_de_stock.git',
    },
  },
  {
    img: '/portfolio.png',
    title: 'Portfolio website',
    description: 'My personal portfolio website.',
    technos: ['Next.js', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/Randriantahina/Portfolio_2025.git',
    },
  },
  {
    img: '/i.png',
    title: 'intelligent website project',
    description: 'Intelligent website.',
    technos: ['Next.js', 'Firebase', 'Gemini API', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/Randriantahina/task-app.git',
    },
  },
];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <div className="w-full flex flex-col items-center text-center">
        <Reveal>
          <h2 className="text-3xl font-bold text-gray-200 mb-10">
            My side fun projects
          </h2>
        </Reveal>

        <Reveal>
          <div
            className="relative flex flex-col justify-center items-center mb-8 w-[400px] mx-auto"
            style={{ minHeight: 400 }}
          >
            {/* Previous Button */}
            <button
              onClick={prevProject}
              className="absolute left-2 top-1/2 -translate-y-1/2 px-3 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-600 transition flex items-center z-10"
              aria-label="Previous project"
            >
              <AiOutlineLeft className="text-3xl" />
            </button>

            {/* Card */}
            <TitleCard
              imageSrc={currentProject.img}
              altText={currentProject.title}
              captionText={currentProject.title}
              containerHeight="auto"
              containerWidth="auto"
              imageHeight="200px"
              imageWidth="200px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />

            {/* Next Button */}
            <button
              onClick={nextProject}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-600 transition flex items-center z-10"
              aria-label="Next project"
            >
              <AiOutlineRight className="text-3xl" />
            </button>
          </div>

          {/* Contenu sous l’image */}
          <div className="w-full max-w-[400px] mt-4 text-white px-4 sm:px-0">
            <p className="text-xs text-gray-200 text-center">
              {currentProject.description}
            </p>
            <a
              href={currentProject.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 bg-slate-700 rounded hover:bg-slate-600 transition mx-auto mt-2"
            >
              <AiOutlineGithub className="mr-2" />
              View on GitHub
            </a>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {currentProject.technos.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-purple-800/60 text-xs text-white px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Project;
