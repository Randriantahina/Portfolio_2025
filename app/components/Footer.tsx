import React from 'react';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer: React.FC = () => (
  <footer className="w-full py-8 text-center text-sm text-gray-400 bg-transparent mt-16">
    <div className="flex justify-center items-center gap-4 mb-2">
      <a
        href="https://github.com/Randriantahina"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-white transition-colors duration-200"
      >
        <AiOutlineGithub
          size={24}
          className="text-gray-300 hover:text-purple-400"
        />
      </a>

      <a
        href="https://www.linkedin.com/in/shan-jeev-1382a92ab/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-white transition-colors duration-200"
      >
        <AiFillLinkedin
          size={24}
          className="text-blue-500 hover:text-blue-400"
        />
      </a>
    </div>
    <p className="text-xs text-neutral-500 tracking-wide">
      © 2025 <span className="text-white font-semibold">Shanjeev</span>. All
      rights reserved.
    </p>
  </footer>
);

export default Footer;
