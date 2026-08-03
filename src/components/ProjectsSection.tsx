'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaNpm } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const personalProjects = [
  {
    title: 'playwright-base (Open Source)',
    description:
      'An open-source Playwright utility library featuring BaseTestData and BaseApi abstractions. It standardizes API contract validation, cuts boilerplate by up to 50%, and enables a modular, maintainable automation architecture for enterprise use cases.',
    tech: ['Playwright', 'TypeScript', 'API Testing'],
    link: 'https://www.npmjs.com/settings/pdnsyamkumar/packages',
    linkType: 'npm',
    docLink: 'https://playwright-npm-packages-one.vercel.app/',
  },
];

const professionalProjects = [
  {
    title: 'Flipspaces Automation Framework',
    description:
      'Architected a modular Playwright TypeScript framework with parallel execution, cutting regression cycle time by 40%. Directed test orchestration with CI/CD pipelines, implementing shift-left strategies to lower release blockers by 25%.',
    tech: ['Playwright', 'TypeScript', 'CI/CD', 'JIRA'],
  },
  {
    title: 'One Health Assist & Hoichoi TV',
    description:
      'Led dual-track manual and Playwright automation, achieving 85% coverage. Engineered reusable API fixtures and data-driven test generation, integrating suites into Azure DevOps CI/CD and validating Smart TV compatibility (Tizen/WebOS).',
    tech: ['Playwright', 'REST & GraphQL', 'Azure DevOps', 'SQL'],
  },
  {
    title: 'Ardelyx, TVS Motors & Betagged',
    description:
      'Executed Salesforce integration testing with 500+ SOQL queries ensuring 99.9% data integrity. Led E2E QA for a WatchOS EV control app, and identified 150+ critical defects using risk-based testing across multiple client platforms.',
    tech: ['Postman', 'SOQL', 'WatchOS', 'Risk Based Testing'],
  },
];

const ProjectCard = ({ project }: { project: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    whileHover={{ y: -6, scale: 1.01 }}
    transition={{ duration: 0.35, ease: 'easeOut' }}
    className="bg-white/80 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/50 p-8 hover:border-brand-peach/50 dark:hover:border-brand-peach/50 hover:shadow-xl dark:hover:shadow-brand-peach/10 transition-all duration-300 group flex flex-col h-full relative overflow-hidden shadow-md dark:shadow-none"
  >
    {/* Background Glow */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-peach/10 dark:bg-brand-peach/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-brand-peach/20 dark:group-hover:bg-brand-peach/10 transition-colors pointer-events-none"></div>

    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-brand-peach transition-colors">
      {project.title}
    </h3>
    <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed text-sm md:text-base">
      {project.description}
    </p>
    <div className="mb-8 flex flex-wrap gap-2">
      {project.tech.map((tech: string, i: number) => (
        <span
          key={i}
          className="px-3 py-1 bg-slate-100 dark:bg-slate-900/80 text-brand-purple text-xs font-bold rounded-full border border-slate-300 dark:border-slate-700"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex flex-wrap gap-6 mt-auto">
      {project.link && (
        <Link
          href={project.link}
          target="_blank"
          className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-purple dark:hover:text-white flex items-center gap-2 transition-colors"
        >
          {project.linkType === 'npm' ? (
            <>
              <FaNpm className="w-6 h-6 text-[#CB3837]" />
              View on NPM
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
            </>
          )}
        </Link>
      )}
      {project.docLink && (
        <Link
          href={project.docLink}
          target="_blank"
          className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-purple dark:hover:text-white flex items-center gap-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          View Documentation
        </Link>
      )}
    </div>
  </motion.div>
);

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<'professional' | 'personal'>('professional');

  const activeProjects = activeTab === 'professional' ? professionalProjects : personalProjects;

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto w-full scroll-mt-24"
    >
      {/* Header & Breadcrumb Tabs */}
      <div className="flex flex-col items-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-10 text-center"
        >
          Projects
        </motion.h2>

        <div className="flex items-center justify-center flex-wrap gap-4 text-lg md:text-xl font-bold">
          <button
            onClick={() => setActiveTab('professional')}
            className={`transition-colors ${
              activeTab === 'professional'
                ? 'border-b-2 border-brand-purple pb-1 text-brand-purple'
                : 'border-b-2 border-transparent pb-1 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300'
            }`}
          >
            Professional Experience
          </button>

          <span className="hidden text-xl text-slate-300 dark:text-slate-600 sm:inline-block">
            |
          </span>

          <button
            onClick={() => setActiveTab('personal')}
            className={`transition-colors ${
              activeTab === 'personal'
                ? 'border-b-2 border-brand-purple pb-1 text-brand-purple'
                : 'border-b-2 border-transparent pb-1 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300'
            }`}
          >
            Personal Projects
          </button>
        </div>
      </div>

      {/* Projects Content Area */}
      <div>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {activeProjects.map((project, index) => (
              <ProjectCard key={`${activeTab}-${index}`} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
