'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from 'react-icons/ai';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import Reveal from './Reveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const contactInfo = [
    {
      icon: <AiOutlineMail className="text-2xl" />,
      title: 'Email',
      value: 'shanjeev24.apollon@gmail.com',
      link: 'mailto:shanjeev.dev@gmail.com',
    },
    {
      icon: <AiOutlinePhone className="text-2xl" />,
      title: 'Téléphone',
      value: '+261 38 39 811 24',
      link: 'tel:+33600000000',
    },
    {
      icon: <AiOutlineEnvironment className="text-2xl" />,
      title: 'Localisation',
      value: 'Madagascar',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: <AiOutlineGithub className="text-2xl" />,
      name: 'GitHub',
      url: 'https://github.com/Randriantahina',
      color: 'hover:text-gray-400',
    },
    {
      icon: <AiOutlineLinkedin className="text-2xl" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shan-jeev-1382a92ab',
      color: 'hover:text-blue-400',
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      setStatus('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus('Veuillez entrer une adresse email valide.');
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        setStatus('Message envoyé avec succès ! 🎉');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Erreur lors de l’envoi.');
      }
    } catch {
      setStatus('Erreur de connexion. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(''), 5000);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900"
    >
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-4xl mx-auto z-10">
        <Reveal>
          {/* Titre principal tout en haut */}
          <h2 className="text-4xl md:text-6xl font-bold mb-12 md:mb-16 text-center">
            <span className="relative inline-block px-4 py-2">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-xl blur-md opacity-40"></span>
              <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Contactez-moi
              </span>
            </span>
          </h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
            {/* Bloc contact infos */}
            <div className="flex-1 flex flex-col justify-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 shadow-lg">
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-gray-900/80 border border-purple-700/30 text-white hover:bg-purple-700/30 hover:border-purple-400 transition-all"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  Suivez-moi
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 transition-colors duration-300 ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bloc formulaire */}
            <div className="flex-1 flex flex-col justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl pointer-events-none"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
                  Envoyez-moi un message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Nom complet
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom complet"
                        className="w-full pl-10 pr-4 py-3 bg-gray-900/80 border border-purple-700/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre.email@exemple.com"
                        className="w-full pl-10 pr-4 py-3 bg-gray-900/80 border border-purple-700/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Décrivez votre projet ou votre message..."
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 bg-gray-900/80 border border-purple-700/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                        required
                      />
                    </div>
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <FiSend className="text-lg" />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </motion.button>
                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-center p-3 rounded-lg ${
                        status.includes('succès')
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}
                      role="alert"
                      aria-live="assertive"
                    >
                      {status}
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
