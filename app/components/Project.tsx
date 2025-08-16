'use client';
import React, { useState } from 'react';
import { AiOutlineGithub, AiOutlineEye, AiOutlineClose } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import Reveal from './Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    img: '/TODO-List.png',
    title: 'Todo Project',
    description:
      'Todo List with authentication built using React.js, Express, and MySQL.',
    longDescription:
      "Application complète de gestion de tâches avec authentification utilisateur, CRUD complet et interface moderne. Développée avec React.js pour le frontend, Express.js pour l'API REST et MySQL pour la base de données.",
    technos: ['React.js', 'Express', 'MySQL', 'Tailwind CSS'],
    category: 'Full-Stack',
    links: {
      github: 'https://github.com/Randriantahina/react-express.git',
      demo: '#',
    },
  },
  {
    id: 2,
    img: '/e.jpg',
    title: 'E-commerce Project',
    description: 'E-commerce website built with Laravel, React, and MySQL.',
    longDescription:
      "Plateforme e-commerce complète avec gestion des produits, panier d'achat, système de paiement et administration. Architecture moderne avec Laravel pour l'API et React pour l'interface utilisateur.",
    technos: ['Laravel', 'React', 'MySQL', 'Tailwind CSS'],
    category: 'Full-Stack',
    links: {
      github: 'https://github.com/Randriantahina/laravel-e-commerce.git',
      demo: '#',
    },
  },
  {
    id: 3,
    img: '/stocks.jpg',
    title: 'Inventory Management',
    description: 'Inventory management project developed with Next.js.',
    longDescription:
      'Système de gestion de stock moderne avec tableau de bord analytique, suivi en temps réel et rapports détaillés. Développé avec Next.js et TypeScript pour une performance optimale.',
    technos: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    category: 'Full-Stack',
    links: {
      github: 'https://github.com/Randriantahina/inventory.git',
      demo: '#',
    },
  },
  {
    id: 4,
    img: '/portfolio.png',
    title: 'Portfolio Website',
    description: 'My personal portfolio website.',
    longDescription:
      'Portfolio personnel moderne avec animations fluides, design responsive et optimisations de performance. Construit avec Next.js et des animations Framer Motion.',
    technos: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    category: 'Frontend',
    links: {
      github: 'https://github.com/Randriantahina/Portfolio_2025.git',
      demo: 'https://shan-rose.vercel.app/',
    },
  },
  {
    id: 5,
    img: '/i.png',
    title: 'Intelligent Website',
    description: 'AI-enhanced intelligent website.',
    longDescription:
      "Application web intelligente intégrant l'IA avec l'API Gemini pour des fonctionnalités avancées. Interface moderne avec Firebase pour l'authentification et le stockage.",
    technos: ['Next.js', 'Firebase', 'Gemini API', 'Tailwind CSS'],
    category: 'Full-Stack',
    links: {
      github: 'https://github.com/Randriantahina/task-app.git',
      demo: '#',
    },
  },
];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const categories = ['All', 'Frontend', 'Full-Stack'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-purple-900/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Mes{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                Projets
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Découvrez mes réalisations récentes, des applications web modernes
              aux solutions innovantes
            </p>
          </div>
        </Reveal>

        {/* Filtres */}
        <Reveal>
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category === 'All' ? 'Tous les projets' : category}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Grille de tous les projets */}
        <Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                whileHover={{ scale: 0.97 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder-project.jpg';
                    }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <AiOutlineEye size={20} />
                    </button>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <AiOutlineGithub size={20} />
                    </a>
                    {project.links.demo !== '#' && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h4>
                    <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technos.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technos.length > 3 && (
                      <span className="text-xs text-gray-400">
                        +{project.technos.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="relative">
                  <div className="h-64 relative">
                    <Image
                      src={selectedProject.img}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <AiOutlineClose size={24} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>

                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-4">
                      Technologies utilisées
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technos.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white px-4 py-2 rounded-lg border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                      <AiOutlineGithub size={20} />
                      Voir le code
                    </a>
                    {selectedProject.links.demo !== '#' && (
                      <a
                        href={selectedProject.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg transition-colors"
                      >
                        <FiExternalLink size={20} />
                        Voir la démo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Project;
