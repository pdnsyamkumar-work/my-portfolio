'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Career', href: '#career' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand info */}
          <div className="text-center md:text-left">
            <Link
              href="#home"
              onClick={scrollToTop}
              className="text-xl font-extrabold tracking-tight cursor-pointer"
            >
              <span className="text-brand-peach">Peraka </span>
              <span className="text-slate-900 dark:text-white">Dola Naga Syam Kumar</span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Software Development Engineer in Test (SDET II)
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-400">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-brand-purple dark:hover:text-brand-peach transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social icons & back to top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/pdnsyamkumar-work"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-slate-900 dark:hover:bg-slate-700 transition-all shadow-sm"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/dola-naga-syam-kumar-peraka-135b4b14a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#0077b5] transition-all shadow-sm"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="mailto:pdnsyamkumar@gmail.com"
              aria-label="Send Email"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#EA4335] transition-all shadow-sm"
            >
              <SiGmail className="text-lg" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-purple text-white hover:bg-brand-purple/80 transition-all shadow-md hover:-translate-y-0.5 ml-2"
            >
              <FaArrowUp className="text-sm" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800/60 text-center text-xs text-slate-500 dark:text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Peraka Dola Naga Syam Kumar. Built with Next.js,
            TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
