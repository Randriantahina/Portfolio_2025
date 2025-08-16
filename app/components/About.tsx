'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaDatabase } from 'react-icons/fa';
import { HiSparkles, HiLightBulb, HiHeart } from 'react-icons/hi';
import Reveal from './Reveal';

const About = () => {
  const skills = [
    { icon: <FaLaptopCode />, title: 'Frontend' },
    { icon: <FaServer />, title: 'Backend' },
    { icon: <FaDatabase />, title: 'Database' },
    { icon: <FaCode />, title: 'Tools' },
  ];

  const passions = [
    {
      icon: <HiSparkles className="text-4xl text-purple-400" />,
      text: 'Créer des expériences utilisateur exceptionnelles',
    },
    {
      icon: <HiLightBulb className="text-4xl text-yellow-400" />,
      text: 'Résoudre des problèmes complexes avec élégance',
    },
    {
      icon: <HiHeart className="text-4xl text-pink-400" />,
      text: 'Apprendre continuellement de nouvelles technologies',
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-black via-purple-900 to-pink-900"
    >
      {/* Animated Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/3 top-10 w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-2xl"></div>
      </div>
      <div className="relative max-w-5xl mx-auto z-10">
        <Reveal>
          {/* Grand titre tout en haut */}
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
            <span className="relative inline-block px-4 py-2">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-xl blur-md opacity-40"></span>
              <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                À propos de moi
              </span>
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Avatar & Infos */}
            <div className="flex flex-col items-center md:items-start">
              <div className="relative mb-8">
                <div className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 animate-pulse"></div>
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-lg relative z-10 border-4 border-white/10">
                  SJ
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Salut, moi c&apos;est{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Shan Jeev
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-2">
                Développeur Full-Stack passionné, créatif et curieux.
              </p>
              <p className="text-gray-400 mb-6">
                J’aime concevoir des applications web modernes, performantes et
                élégantes.
              </p>
            </div>

            {/* Skills & Passions */}
            <div>
              {/* Skills grid */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 0.97 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-900/80 border border-purple-700/30 text-white shadow transition-all cursor-pointer hover:bg-purple-700/30 hover:border-purple-400"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-semibold">{skill.title}</span>
                  </motion.div>
                ))}
              </div>
              {/* Passions cards */}
              <div className="space-y-5">
                {passions.map((passion, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 0.97 }}
                    className="flex items-center gap-5 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-5 border border-white/10 shadow hover:border-purple-400/30 transition-all"
                  >
                    <div>{passion.icon}</div>
                    <p className="text-gray-200 text-base font-medium">
                      {passion.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
