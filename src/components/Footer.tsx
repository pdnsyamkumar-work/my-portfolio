const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 text-center text-slate-600 dark:text-slate-400 transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Peraka Dola Naga Syam Kumar. Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
