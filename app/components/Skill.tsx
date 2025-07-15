'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { DiSass, DiReact, DiNodejsSmall, DiMongodb } from 'react-icons/di';
import { RiTailwindCssFill, RiNextjsFill } from 'react-icons/ri';
import { FaLaravel } from 'react-icons/fa';
import { SiMysql, SiPostgresql } from 'react-icons/si';

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
      { name: 'Next.Js', icon: <RiNextjsFill /> },
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

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-16 text-gray-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent"
        variants={itemVariants}
      >
        Skills
      </motion.h2>

      <motion.p
        className="text-center mb-12 text-gray-400 max-w-md mx-auto"
        variants={itemVariants}
      >
        I love working on frontend and backend technologies to build amazing
        apps.
      </motion.p>

      <div className="flex flex-col md:flex-row justify-center items-start gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-purple-900/30 border border-purple-700 rounded-2xl p-8 shadow-lg w-full md:w-5/6 h-[320px]  overflow-hidden"
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">
              {skill.category}
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              {skill.technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 p-2 rounded-md cursor-default select-none hover:bg-purple-700/40 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  title={tech.name}
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-base">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
