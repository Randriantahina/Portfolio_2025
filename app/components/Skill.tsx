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
    description: 'Interface utilisateur moderne et responsive',
    color: 'from-blue-500 to-cyan-500',
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
        name: 'TailwindCSS',
        icon: <RiTailwindCssFill className="text-blue-600" />,
      },
      {
        name: 'Sass',
        icon: <DiSass className="text-pink-600" />,
      },
      {
        name: 'Next.js',
        icon: <RiNextjsFill className="text-white" />,
      },
    ],
  },
  {
    category: 'Backend',
    description: 'Serveurs robustes et bases de données',
    color: 'from-green-500 to-emerald-500',
    technologies: [
      {
        name: 'Node.js',
        icon: <DiNodejsSmall className="text-green-500" />,
      },
      {
        name: 'MongoDB',
        icon: <DiMongodb className="text-green-600" />,
      },
      {
        name: 'Laravel',
        icon: <FaLaravel className="text-red-500" />,
      },
      {
        name: 'MySQL',
        icon: <SiMysql className="text-blue-600" />,
      },
      {
        name: 'PostgreSQL',
        icon: <SiPostgresql className="text-blue-400" />,
      },
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
      className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-purple-900/20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Mes{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Passionné par les technologies frontend et backend pour créer des
            applications exceptionnelles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
            >
              {/* Effet de glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-20 blur-xl rounded-2xl group-hover:opacity-30 transition-opacity duration-300`}
              />

              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center mr-4`}
                  >
                    <span className="text-2xl font-bold text-white">
                      {skill.category.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {skill.category}
                    </h3>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {skill.technologies.map((tech, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group/tech"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-3xl group-hover/tech:scale-110 transition-transform">
                          {tech.icon}
                        </span>
                        <span className="text-lg font-medium text-white">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
