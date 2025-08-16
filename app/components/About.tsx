'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaMobile,
  FaDatabase,
  FaPalette,
} from 'react-icons/fa';
import { HiSparkles, HiLightBulb, HiHeart } from 'react-icons/hi';
import Reveal from './Reveal';

const About = () => {
  const skills = [
    {
      icon: <FaLaptopCode className="text-2xl text-blue-400" />,
      title: 'Frontend',
      description: 'React, Next.js, TypeScript',
    },
    {
      icon: <FaServer className="text-2xl text-green-400" />,
      title: 'Backend',
      description: 'Node.js, Laravel, Express',
    },
    {
      icon: <FaDatabase className="text-2xl text-orange-400" />,
      title: 'Database',
      description: 'MongoDB, MySQL, PostgreSQL',
    },
    {
      icon: <FaMobile className="text-2xl text-purple-400" />,
      title: 'Mobile',
      description: 'Responsive Design',
    },
    {
      icon: <FaPalette className="text-2xl text-pink-400" />,
      title: 'Design',
      description: 'TailwindCSS, Sass',
    },
    {
      icon: <FaCode className="text-2xl text-cyan-400" />,
      title: 'Tools',
      description: 'Git, Docker, Postman',
    },
  ];

  const passions = [
    {
      icon: <HiSparkles className="text-xl" />,
      text: 'Créer des expériences utilisateur exceptionnelles',
    },
    {
      icon: <HiLightBulb className="text-xl" />,
      text: 'Résoudre des problèmes complexes avec élégance',
    },
    {
      icon: <HiHeart className="text-xl" />,
      text: 'Apprendre continuellement de nouvelles technologies',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              À propos de{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                moi
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Développeur Full-Stack passionné, je transforme des idées
              créatives en solutions digitales innovantes
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image et info personnelle */}
          <Reveal>
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white">
                  SJ
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">
                  Développeur Full-Stack Passionné
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Avec une passion pour la création d&apos;applications web
                  modernes et performantes, je combine créativité et expertise
                  technique pour donner vie à vos idées.
                </p>
              </div>
              {/* Effet de glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl blur-xl -z-10"></div>
            </div>
          </Reveal>

          {/* Skills Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Domaines d&apos;expertise
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <Reveal key={index}>
                  <motion.div
                    whileHover={{ scale: 0.97 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                  >
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mr-3">
                        {skill.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-white">
                        {skill.title}
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm">{skill.description}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Passions Section */}
        <Reveal>
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-8">
              Ce qui me passionne
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {passions.map((passion, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 0.97 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                >
                  <div className="text-purple-400 mb-4 flex justify-center">
                    {passion.icon}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {passion.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
