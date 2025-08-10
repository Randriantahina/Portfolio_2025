'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { DiJavascript1, DiNodejsSmall, DiReact } from 'react-icons/di';
import { TbBrandTypescript } from 'react-icons/tb';
import { FaPhp } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import AutoTyping from './ui/AutoTyping';

const Hero = () => {
  const [viewportHeight, setViewportHeight] = useState('100vh');

  useEffect(() => {
    const setHeight = () => {
      const vh = window.innerHeight;
      setViewportHeight(`${vh}px`);
    };
    setHeight();
    window.addEventListener('resize', setHeight);
    return () => window.removeEventListener('resize', setHeight);
  }, []);

  const staggerVariants = {
    visible: { transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
    hover: {
      scale: 1.2,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="hero"
      style={{ height: viewportHeight }}
      className="relative overflow-hidden px-6 flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 via-purple-900 to-black"
    >
      {/* Fond léger blur et gradient amélioré */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/40 via-pink-900/30 to-indigo-900/40 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/10 to-transparent pointer-events-none" />

      <motion.div
        className="relative max-w-4xl z-10"
        initial="hidden"
        animate="visible"
        variants={staggerVariants}
      >
        <motion.h1
          className="text-gray-100 md:text-7xl text-5xl font-extrabold tracking-tight mb-6 relative"
          variants={itemVariants}
        >
          <span className="relative">
            <span className="text-glow">HELLO, I AM</span> <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent relative text-6xl md:text-8xl">
              Shan Jeev
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-lg -z-10"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </span>
          </span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mb-8 text-xl md:text-2xl text-gray-300"
        >
          <AutoTyping />
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 mb-8"
          variants={itemVariants}
        >
          <div className="flex gap-8 text-4xl text-purple-400">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/Randriantahina"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/shan-jeev-1382a92ab"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineLinkedin />
            </motion.a>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/CV.pdf"
            download
            className="relative flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 overflow-hidden group"
            aria-label="Download CV"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-xl group-hover:blur-2xl transition-all duration-300" />
            <FiDownload size={20} className="relative z-10" />
            <span className="relative z-10">Download CV</span>
          </motion.a>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 text-5xl md:text-7xl text-gray-300"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} whileHover="hover">
            <FaPhp className="mx-2" style={{ color: '#777BB4' }} />
          </motion.div>
          <motion.div variants={itemVariants} whileHover="hover">
            <TbBrandTypescript className="text-blue-600 mx-2" />
          </motion.div>
          <motion.div variants={itemVariants} whileHover="hover">
            <DiJavascript1 className="text-yellow-500 mx-2" />
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="animate-spin"
            style={{ animationDuration: '9s' }}
          >
            <DiReact className="text-blue-500 mx-2" />
          </motion.div>
          <motion.div variants={itemVariants} whileHover="hover">
            <DiNodejsSmall className="text-green-500 mx-2" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Flèche scroll */}
      <motion.div
        aria-label="Scroll down"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 text-purple-400 hover:text-purple-300"
      >
        <svg
          className="w-10 h-10 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
