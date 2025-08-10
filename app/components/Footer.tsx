import React from 'react';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer: React.FC = () => (
  <footer className="w-full py-8 text-center text-sm text-gray-400 bg-transparent mt-16">
    <div className="max-w-6xl mx-auto px-6">
      {/* Ligne décorative */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8"></div>

      {/* Réseaux sociaux */}
      <div className="flex justify-center items-center gap-6 mb-6">
        <a
          href="https://github.com/Randriantahina"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
        >
          <AiOutlineGithub size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/shan-jeev-1382a92ab/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-blue-500 hover:text-blue-400 transition-colors duration-200"
        >
          <AiFillLinkedin size={24} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs text-neutral-500 tracking-wide">
        © 2025 Fait avec ❤️ par{' '}
        <span className="text-white font-semibold">Shan Jeev</span>. Tous droits
        réservés.
      </p>
    </div>
  </footer>
);

export default Footer;
