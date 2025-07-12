'use client';
import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { DiJavascript1, DiNodejsSmall, DiReact } from 'react-icons/di';
import { TbBrandTypescript } from 'react-icons/tb';
import { FaPhp } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
      <div className="flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HELLO, I AM <br />
            <span className="text-purple-500">Shan Jeev</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I am a passionate fullstack developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/Randriantahina"
                aria-label="GitHub"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/shan-jeev-1382a92ab"
                aria-label="LinkedIn"
              >
                <AiOutlineLinkedin />
              </motion.a>
            </div>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="/CV.pdf"
              download
              className="ml-4 px-4 py-2 rounded bg-purple-500 text-white text-base md:text-lg font-semibold shadow hover:bg-purple-600 transition-colors duration-200 flex items-center gap-2"
              aria-label="Download CV"
            >
              <FiDownload size={20} />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-col md:flex-row text-3xl sm:text-5xl md:text-7xl px-4 sm:px-6 md:px-0 w-full justify-center items-center py-12 sm:py-24 gap-6"
      >
        <p className="text-gray-200 mr-0 md:mr-6 text-center">My Tech Stack</p>
        <motion.div whileHover={{ scale: 1.2 }}>
          <FaPhp className="mx-2" style={{ color: '#777BB4' }} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <TbBrandTypescript className="text-blue-600 mx-2" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <DiJavascript1 className="text-yellow-500 mx-2" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <DiReact
            className="text-blue-500 mx-2 animate-spin"
            style={{ animationDuration: '9s' }}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <DiNodejsSmall className="text-green-500 mx-2" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
