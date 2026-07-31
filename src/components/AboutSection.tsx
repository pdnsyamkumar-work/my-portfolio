'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  const cardVariants = {
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
        About <span className="text-brand-purple">Me</span>
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
              I am a Software Development Engineer in Test (SDET) with over 8.5 years of total
              professional experience. This includes{' '}
              <strong className="text-brand-purple">3.5+</strong> years of relevant experience
              specializing in building robust{' '}
              <strong className="text-brand-purple">Playwright</strong> and{' '}
              <strong className="text-brand-purple">TypeScript</strong> automation frameworks for
              web and API services, and 5 years of prior engineering experience.
            </p>
            <p>
              I recently architected a modular framework that cut regression cycle time by 40% and
              tripled test execution speed through parallelization. By integrating automated suites
              into <strong className="text-brand-purple">CI/CD</strong> pipelines using{' '}
              <strong className="text-brand-purple">Azure DevOps</strong> and applying shift-left
              testing, I help teams achieve faster, more reliable release cycles.
            </p>
            <p>
              I am passionate about eliminating manual bottlenecks and reducing flaky tests. I have
              successfully achieved <strong className="text-brand-purple">85% test coverage</strong>{' '}
              and reduced defect resolution time by 30% via CI/CD-integrated{' '}
              <strong className="text-brand-purple">API validation</strong>, ensuring robust and
              on-schedule releases.
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
              Beyond the code, I am a dedicated problem solver who views software quality not just
              as finding bugs, but as ensuring an exceptional end-user experience. I approach
              testing with an <strong className="text-brand-purple">engineering mindset</strong>
              —building tools that empower developers rather than just acting as a gatekeeper.
            </p>
            <p>
              Having extensive experience with both manual testing and{' '}
              <strong className="text-brand-purple">advanced automation</strong>, I know how to
              strike the right balance between exhaustive{' '}
              <strong className="text-brand-purple">exploratory testing</strong> and targeted,
              high-speed <strong className="text-brand-purple">automated regression</strong>.
            </p>
            <p>
              When I'm not architecting test frameworks or debugging flaky pipelines, I enjoy{' '}
              <strong className="text-brand-purple">continuous learning</strong> and exploring the
              latest trends in test automation,{' '}
              <strong className="text-brand-purple">DevOps</strong>, and web development
              technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
