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
    try {
      const { name, value } = e.target;
      if (name && typeof value === 'string') {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    } catch (error) {
      console.warn('Form input error:', error);
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Validation des données
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
      className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-purple-900/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contactez-
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                moi
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Vous avez un projet en tête ? N&apos;hésitez pas à me contacter
              pour en discuter !
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Informations de contact */}
          <Reveal>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Restons en contact
                </h3>
                <p className="text-gray-300 text-lg mb-8">
                  Je suis toujours ouvert aux nouvelles opportunités et
                  collaborations. Que ce soit pour un projet, une question ou
                  simplement pour échanger, n&apos;hésitez pas à me contacter !
                </p>
              </div>

              {/* Informations de contact */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center text-purple-400 group-hover:text-purple-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Réseaux sociaux */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  Suivez-moi
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 transition-colors duration-300 ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Formulaire de contact */}
          <Reveal>
            <div className="relative">
              {/* Effet de glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl"></div>

              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Envoyez-moi un message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nom */}
                  <div className="relative">
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
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
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
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
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
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Bouton d'envoi */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
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

                  {/* Status message */}
                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-center p-3 rounded-lg ${
                        status.includes('succès')
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}
                    >
                      {status}
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
