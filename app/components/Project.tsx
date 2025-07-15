'use client';
import React, { useState } from 'react';
import { AiOutlineGithub, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import TitleCard from './ui/TitleCard';
import Reveal from './Reveal';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    img: '/TODO-List.png',
    title: 'Todo Project',
    description:
      'Todo List with authentication built using React.js, Express, and MySQL.',
    technos: ['React.js', 'Express', 'MySQL', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/Randriantahina/react-express.git',
    },
  },
  {
    img: '/e.jpg',
    title: 'E-commerce Project',
    description: 'E-commerce website built with Laravel, React, and MySQL.',
    technos: ['Laravel', 'React', 'MySQL', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/Randriantahina/laravel-e-commerce.git',
    },
  },
  {
    img: '/stocks.jpg',
    title: 'Inventory Management',
    description: 'Inventory management project developed with Next.js.',
    technos: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'MySQL'],
    links: {
      github: 'https://github.com/Randriantahina/next-js-gestion_de_stock.git',
    },
  },
  {
    img: '/portfolio.png',
    title: 'Portfolio Website',
    description: 'My personal portfolio website.',
    technos: ['Next.js', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/Randriantahina/Portfolio_2025.git',
    },
  },
  {
    img: '/i.png',
    title: 'Intelligent Website',
    description: 'AI-enhanced intelligent website.',
    technos: ['Next.js', 'Firebase', 'Gemini API', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/Randriantahina/task-app.git',
    },
  },
];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const currentProject = projects[currentIndex];

  return (
    <div className="max-w-4xl mx-auto px-4 py-20" id="portfolio">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            My fun side Projects
          </h2>
        </Reveal>

        <Reveal>
          <div className="relative flex flex-col items-center w-full max-w-md mx-auto mb-8 min-h-[420px]">
            {/* Prev button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-purple-700 text-white p-2 rounded-full hover:bg-purple-600 z-10"
              aria-label="Previous project"
            >
              <AiOutlineLeft className="text-2xl" />
            </button>

            {/* Project content with animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center w-full mt-20"
              >
                <TitleCard
                  imageSrc={currentProject.img}
                  altText={currentProject.title}
                  captionText={currentProject.title}
                  containerHeight="auto"
                  containerWidth="auto"
                  imageHeight="200px"
                  imageWidth="200px"
                  rotateAmplitude={8}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={false}
                />
              </motion.div>
            </AnimatePresence>

            {/* Next button */}
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-700 text-white p-2 rounded-full hover:bg-purple-600 z-10"
              aria-label="Next project"
            >
              <AiOutlineRight className="text-2xl" />
            </button>
          </div>

          {/* Text info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-md mx-auto text-white text-sm px-2"
          >
            <p className="text-center mb-3">{currentProject.description}</p>
            <div className="flex justify-center mb-3">
              <a
                href={currentProject.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded shadow-md transition"
              >
                <AiOutlineGithub />
                View on GitHub
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {currentProject.technos.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-purple-800/60 hover:bg-purple-700 text-xs text-white px-3 py-1 rounded transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </div>
  );
};

export default Project;
