"use client";

import { useState } from "react";
import Link from 'next/link';
import { FaNpm } from 'react-icons/fa';

const personalProjects = [
  {
    title: 'playwright-base (Open Source)',
    description: 'An open-source Playwright utility library featuring BaseTestData and BaseApi abstractions. It standardizes API contract validation, cuts boilerplate by up to 50%, and enables a modular, maintainable automation architecture for enterprise use cases.',
    tech: ['Playwright', 'TypeScript', 'API Testing'],
    link: 'https://www.npmjs.com/settings/pdnsyamkumar/packages',
    linkType: 'npm'
  }
];

const professionalProjects = [
  {
    title: 'Flipspaces Automation Framework',
    description: 'Architected a modular Playwright TypeScript framework with parallel execution, cutting regression cycle time by 40%. Directed test orchestration with CI/CD pipelines, implementing shift-left strategies to lower release blockers by 25%.',
    tech: ['Playwright', 'TypeScript', 'CI/CD', 'JIRA'],
  },
  {
    title: 'One Health Assist & Hoichoi TV',
    description: 'Led dual-track manual and Playwright automation, achieving 85% coverage. Engineered reusable API fixtures and data-driven test generation, integrating suites into Azure DevOps CI/CD and validating Smart TV compatibility (Tizen/WebOS).',
    tech: ['Playwright', 'REST & GraphQL', 'Azure DevOps', 'SQL'],
  },
  {
    title: 'Ardelyx, TVS Motors & Betagged',
    description: 'Executed Salesforce integration testing with 500+ SOQL queries ensuring 99.9% data integrity. Led E2E QA for a WatchOS EV control app, and identified 150+ critical defects using risk-based testing across multiple client platforms.',
    tech: ['Postman', 'SOQL', 'WatchOS', 'Risk Based Testing'],
  },
];

const ProjectCard = ({ project }: { project: any }) => (
  <div className="bg-white/80 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/50 p-8 hover:border-brand-peach/50 dark:hover:border-brand-peach/50 transition-colors group flex flex-col h-full relative overflow-hidden shadow-md dark:shadow-none">
    {/* Background Glow */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-peach/10 dark:bg-brand-peach/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-brand-peach/20 dark:group-hover:bg-brand-peach/10 transition-colors pointer-events-none"></div>
    
    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-brand-peach transition-colors">
      {project.title}
    </h3>
    <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed">
      {project.description}
    </p>
    <div className="mb-8 flex flex-wrap gap-2">
      {project.tech.map((tech: string, i: number) => (
        <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-900/80 text-brand-purple text-xs font-bold rounded-full border border-slate-300 dark:border-slate-700">
          {tech}
        </span>
      ))}
    </div>
    <div className="flex gap-6 mt-auto">
      {project.link && (
        <Link href={project.link} target="_blank" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-purple dark:hover:text-white flex items-center gap-2 transition-colors">
          {project.linkType === 'npm' ? (
            <>
              <FaNpm className="w-6 h-6 text-[#CB3837]" />
              View on NPM
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </>
          )}
        </Link>
      )}
    </div>
  </div>
);

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'professional' | 'personal'>('professional');

  const activeProjects = activeTab === 'professional' ? professionalProjects : personalProjects;

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 min-h-[calc(100vh-10rem)]">
      {/* Header & Breadcrumb Tabs */}
      <div className="flex flex-col items-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-10 text-center">
          Projects
        </h1>
        
        <div className="flex items-center justify-center flex-wrap gap-4 text-xl md:text-2xl font-bold">
          <button 
            onClick={() => setActiveTab('personal')}
            className={`transition-colors ${
              activeTab === 'personal' 
                ? 'text-brand-purple border-b-2 border-brand-purple pb-1' 
                : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 pb-1 border-b-2 border-transparent'
            }`}
          >
            Personal Projects
          </button>
          
          <span className="text-slate-300 dark:text-slate-600 text-2xl hidden sm:inline-block">|</span>
          
          <button 
            onClick={() => setActiveTab('professional')}
            className={`transition-colors ${
              activeTab === 'professional' 
                ? 'text-brand-purple border-b-2 border-brand-purple pb-1' 
                : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 pb-1 border-b-2 border-transparent'
            }`}
          >
            Professional Experience
          </button>
        </div>
      </div>

      {/* Projects Content Area */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activeProjects.map((project, index) => (
            <ProjectCard key={`${activeTab}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
