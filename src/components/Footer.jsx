import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-10 border-t border-neutral-900"

      style={{ fontFamily: '"Raleway", sans-serif' }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold tracking-tight text-white mb-1">
              Omm Roshan
            </h2>
            <p className="text-neutral-400 text-sm font-medium">
              Full Stack Developer
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a href="https://github.com/omm010408" className="text-neutral-400 hover:text-white transition-colors duration-200" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/omm-roshan-sahoo-432077273/" className="text-neutral-400 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/OmmRoshan6753" className="text-neutral-400 hover:text-white transition-colors duration-200" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="mailto:ommroshan@gmail.com" className="text-neutral-400 hover:text-white transition-colors duration-200" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-xs text-center md:text-left">
            © {currentYear} Omm Roshan. All rights reserved.
          </p>
          <p className="text-neutral-500 text-xs text-center md:text-right">
            Built with ♥ by Omm Roshan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;