'use client';

import { motion, Variants } from 'framer-motion';

export default function AboutSection() {
  const cardVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: {
      y: -6,
      scale: 1.01,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto w-full z-10 relative scroll-mt-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-12 text-center"
      >
        About <span className="text-brand-purple">Me</span> 👨‍💻
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Professional Summary Card */}
        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          whileHover="hover"
          viewport={{ once: true, margin: '-50px' }}
          className="bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 shadow-md dark:shadow-none backdrop-blur-sm transition-all duration-300 cursor-pointer hover:shadow-xl hover:border-brand-purple/50 dark:hover:border-brand-purple/50 dark:hover:shadow-brand-purple/10 flex flex-col h-full"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-200 mb-6 flex items-center gap-2">
            Professional Summary 🚀
          </h3>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm lg:text-base">
            <p>
              Software Development Engineer in Test (SDET) with{' '}
              <strong className="text-brand-purple">3.6+</strong> years of hands-on experience in
              building scalable automation frameworks using{' '}
              <strong className="text-brand-purple">Playwright</strong> and{' '}
              <strong className="text-brand-purple">TypeScript</strong> for web and API
              applications.
            </p>
            <p>
              I specialize in designing reliable, high-performance test systems that reduce regression
              time, improve release confidence, and eliminate flaky tests. I have successfully
              delivered modular automation frameworks that reduced regression cycles by 40%, achieved
              85% test coverage, and accelerated defect resolution by 30% through{' '}
              <strong className="text-brand-purple">CI/CD-integrated testing</strong>.
            </p>
            <p>
              Prior to transitioning into software testing, I gained ~5 years of experience across
              diverse engineering domains, including GIS and biomedical systems. This background
              strengthened my problem-solving mindset, attention to detail, and system-level
              thinking.
            </p>
            <p>
              Overall, I bring <strong className="text-brand-purple">8.6+</strong> years of
              professional experience, combining domain expertise with modern test engineering
              practices.
            </p>
            <p>
              I focus on building automation that empowers teams — not just finding bugs, but enabling
              faster, more reliable software delivery.
            </p>
          </div>
        </motion.div>

        {/* About Me Card */}
        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          whileHover="hover"
          viewport={{ once: true, margin: '-50px' }}
          className="bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 shadow-md dark:shadow-none backdrop-blur-sm transition-all duration-300 cursor-pointer hover:shadow-xl hover:border-brand-peach/50 dark:hover:border-brand-peach/50 dark:hover:shadow-brand-peach/10 flex flex-col h-full group"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-200 mb-6 flex items-center gap-2">
            Who I Am{' '}
            <motion.span
              className="inline-block origin-bottom-right"
              whileHover={{ rotate: [0, 14, -8, 14, -4, 10, 0], transition: { duration: 0.5 } }}
            >
              👋
            </motion.span>
          </h3>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm lg:text-base">
            <p>
              Beyond writing test cases, I see quality as a core part of engineering — not a phase. I approach testing with a <strong className="text-brand-purple">systems mindset</strong>, focusing on building scalable solutions that prevent issues rather than just detecting them.
            </p>
            <p>
              I enjoy designing automation that integrates seamlessly into development workflows, enabling faster feedback, stable releases, and confident deployments. To me, testing is most effective when it empowers developers, not slows them down.
            </p>
            <p>
              With experience across both manual and automated testing, I understand where human insight matters and where automation delivers the most value. I aim to strike the right balance between <strong className="text-brand-purple">exploratory thinking</strong> and high-speed, reliable <strong className="text-brand-purple">automation</strong>.
            </p>
            <p>
              Outside of building frameworks and debugging pipelines, I’m constantly exploring better ways to improve quality — from modern test architecture to <strong className="text-brand-purple">CI/CD practices</strong> and developer experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
