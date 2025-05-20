import React from 'react';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer: React.FC = () => (
  <footer className="w-full py-6 text-center text-neutral-400 text-sm mt-10">
    © 2025 Shanjeev.
    <a
      href="https://github.com/Randriantahina"
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent underline mx-2 hover:text-white transition inline-flex items-center"
      aria-label="Github"
    >
      <AiOutlineGithub size={20} className="text-gray-600" />
    </a>
    •
    <a
      href="https://www.linkedin.com/in/shan-jeev-1382a92ab/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent underline mx-2 hover:text-white transition inline-flex items-center"
      aria-label="LinkedIn"
    >
      <AiFillLinkedin size={20} className="text-blue-600" />
    </a>
  </footer>
);

export default Footer;
