"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { DiSass, DiReact, DiNodejsSmall, DiMongodb } from "react-icons/di";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiGithubactions, SiDocker, SiBootstrap } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiMysql, SiPostgresql } from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    description: "Interface utilisateur moderne et responsive",
    technologies: [
      {
        name: "React.Js",
        IconComponent: DiReact,
        iconProps: {
          className: "text-blue-500 animate-spin",
          style: { animationDuration: "10s" },
        },
      },
      {
        name: "TailwindCSS",
        IconComponent: RiTailwindCssFill,
        iconProps: { className: "text-blue-600" },
      },
      {
        name: "Sass",
        IconComponent: DiSass,
        iconProps: { className: "text-pink-600" },
      },
      {
        name: "Next.js",
        IconComponent: RiNextjsFill,
        iconProps: { className: "text-white" },
      },
      {
        name: "Bootstrap",
        IconComponent: SiBootstrap,
        iconProps: { className: "text-purple-500" },
      },
    ],
  },
  {
    category: "Backend",
    description: "Serveurs robustes et bases de données",
    technologies: [
      {
        name: "Node.js",
        IconComponent: DiNodejsSmall,
        iconProps: { className: "text-green-500" },
      },
      {
        name: "MongoDB",
        IconComponent: DiMongodb,
        iconProps: { className: "text-green-600" },
      },
      {
        name: "Laravel",
        IconComponent: FaLaravel,
        iconProps: { className: "text-red-500" },
      },
      {
        name: "MySQL",
        IconComponent: SiMysql,
        iconProps: { className: "text-blue-600" },
      },
      {
        name: "PostgreSQL",
        IconComponent: SiPostgresql,
        iconProps: { className: "text-blue-400" },
      },
    ],
  },
  {
    category: "DevOps",
    description: "Automatisation, CI/CD et conteneurisation",
    technologies: [
      {
        name: "CI/CD",
        IconComponent: SiGithubactions,
        iconProps: { className: "text-sky-500" },
      },
      {
        name: "Docker",
        IconComponent: SiDocker,
        iconProps: { className: "text-blue-500" },
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.section
      id="skills"
      className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-purple-900/20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Mes{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Compétences
            </span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          <motion.p
            className="text-gray-300 text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Passionné par les technologies frontend et backend pour créer des
            applications exceptionnelles
          </motion.p>
        </div>

        <div className="flex justify-center mb-12 space-x-4">
          {skills.map((skill, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative px-5 py-2 text-lg font-semibold rounded-full transition-colors duration-300 ${
                activeTab === index ? "text-white" : "text-gray-400"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              {activeTab === index && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{skill.category}</span>
            </motion.button>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-2">
            {skills[activeTab].category}
          </h3>
          <p className="text-gray-400 mb-8">
            {skills[activeTab].description}
          </p>
          <motion.div
            key={activeTab} // This key is important to trigger re-animation
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skills[activeTab].technologies.map((tech) => {
              const { IconComponent, iconProps } = tech;
              return (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                >
                  <span className="text-5xl mb-3 transition-transform group-hover:scale-110">
                    <IconComponent {...iconProps} />
                  </span>
                  <span className="text-lg font-medium text-white">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
