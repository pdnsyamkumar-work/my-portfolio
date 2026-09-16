'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Achievements', path: '#achievements' },
  { name: 'Career', path: '#career' },
  { name: 'Skills', path: '#skills' },
  { name: 'Projects', path: '#projects' },
  { name: 'Contact', path: '#contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const id = link.path.substring(1);
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (path === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const id = path.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={`relative w-full z-40 transition-all duration-300 ${hasScrolled ? 'py-2 bg-[#1e2029]/90 backdrop-blur-md' : 'py-4 bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link
                href="#home"
                onClick={(e) => handleLinkClick(e, '#home')}
                className="text-lg md:text-xl lg:text-2xl font-extrabold tracking-tight group flex items-center cursor-pointer"
              >
                <Image
                  src="/syam-portfolio-logo.png"
                  alt="Syam Kumar"
                  width={48}
                  height={48}
                  className="mr-3 h-12 w-12 shrink-0"
                  priority
                />
                <span className="text-brand-peach group-hover:text-brand-purple transition-colors">
                  Peraka{' '}
                </span>
                <span className="text-slate-900 dark:text-white transition-colors group-hover:text-brand-peach ml-1">
                  Dola Naga Syam Kumar
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 ml-10">
              {navLinks.map((link) => {
                const isActive = activeSection === link.path.substring(1);
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className={`text-sm font-bold transition-all relative ${isActive ? 'text-brand-purple' : 'text-slate-600 dark:text-slate-300 hover:text-brand-peach dark:hover:text-brand-peach'}`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand-purple rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-slate-900 dark:text-white p-2 focus:outline-none"
              >
                <FaBars className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 bg-slate-900 shadow-2xl z-50 lg:hidden flex flex-col pt-20 px-6"
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 text-slate-500 hover:text-slate-900 dark:hover:text-white p-2"
              >
                <FaTimes className="text-2xl" />
              </button>

              <div className="flex flex-col space-y-6 mt-8">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.path.substring(1);
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      onClick={(e) => handleLinkClick(e, link.path)}
                      className={`text-lg font-bold transition-colors ${isActive ? 'text-brand-purple' : 'text-slate-700 dark:text-slate-300 hover:text-brand-peach'}`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
