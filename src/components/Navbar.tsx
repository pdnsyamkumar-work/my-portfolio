"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-10 w-full z-40 bg-white/80 dark:bg-[#1e2029]/90 backdrop-blur-md shadow-sm dark:shadow-none border-b border-slate-200 dark:border-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-lg md:text-xl lg:text-2xl font-extrabold tracking-tight whitespace-nowrap">
              <span className="text-brand-peach">Dola Naga </span>
              <span className="text-slate-900 dark:text-white transition-colors">Syam Kumar Peraka</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-10 ml-10">
              <Link href="/" className={`text-sm font-semibold transition-colors ${pathname === '/' ? 'text-brand-peach' : 'text-slate-700 dark:text-white hover:text-brand-peach dark:hover:text-brand-peach'}`}>
                Home
              </Link>
              <Link href="/about" className={`text-sm font-semibold transition-colors ${pathname === '/about' ? 'text-brand-peach' : 'text-slate-700 dark:text-white hover:text-brand-peach dark:hover:text-brand-peach'}`}>
                About
              </Link>
              <Link href="/projects" className={`text-sm font-semibold transition-colors ${pathname === '/projects' ? 'text-brand-peach' : 'text-slate-700 dark:text-white hover:text-brand-peach dark:hover:text-brand-peach'}`}>
                Projects
              </Link>

              <Link href="/contact" className={`text-sm font-semibold transition-colors ${pathname === '/contact' ? 'text-brand-peach' : 'text-slate-700 dark:text-white hover:text-brand-peach dark:hover:text-brand-peach'}`}>
                Contact
              </Link>
              
              {/* Theme Toggle */}
              <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
