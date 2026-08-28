'use client';

import { useState } from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiGithubactions,
  SiBitbucket,
  SiGit,
  SiPostman,
  SiJira,
} from 'react-icons/si';
import { VscAzureDevops } from 'react-icons/vsc';
import {
  FaDatabase,
  FaSitemap,
  FaBolt,
  FaNetworkWired,
  FaServer,
  FaHandPointer,
  FaWeightHanging,
  FaCogs,
  FaSyncAlt,
  FaShieldAlt,
  FaArrowLeft,
  FaTv,
  FaFileCode,
  FaProjectDiagram,
  FaRobot,
  FaCode,
  FaSalesforce,
  FaLinux,
} from 'react-icons/fa';
import { useSkillHover, SkillCategory } from '@/context/SkillHoverContext';

type Category =
  | 'All'
  | 'Languages'
  | 'Automation'
  | 'API & Functional'
  | 'DevOps & Tools'
  | 'IDE Tools'
  | 'Methodologies';

const AntigravityIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <defs>
      <linearGradient id="agyGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="30%" stopColor="#10b981" />
        <stop offset="70%" stopColor="#f43f5e" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <path
      d="M 4 20 C 4 20 8 4 12 4 C 16 4 20 20 20 20 C 20 20 16 12 12 12 C 8 12 4 20 4 20 Z"
      fill="url(#agyGrad)"
    />
  </svg>
);

const CursorIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 bg-slate-800 dark:bg-black rounded-md p-0.5">
    <path
      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface Skill {
  name: string;
  category: Category[];
  icon: React.ReactNode;
}

const skillsData: Skill[] = [
  // Languages
  {
    name: 'JavaScript',
    category: ['All', 'Languages'],
    icon: <SiJavascript className="text-yellow-400" />,
  },
  {
    name: 'TypeScript',
    category: ['All', 'Languages'],
    icon: <SiTypescript className="text-blue-500" />,
  },
  { name: 'SQL', category: ['All', 'Languages'], icon: <FaDatabase className="text-slate-400" /> },
  { name: 'YAML', category: ['All', 'Languages'], icon: <FaFileCode className="text-pink-500" /> },
  { name: 'SOQL', category: ['All', 'Languages'], icon: <FaSalesforce className="text-sky-500" /> },

  // Automation
  {
    name: 'Playwright',
    category: ['All', 'Automation'],
    icon: (
      <img
        src="https://playwright.dev/img/playwright-logo.svg"
        alt="Playwright"
        className="w-5 h-5"
      />
    ),
  },
  {
    name: 'Test Architecture',
    category: ['All', 'Automation'],
    icon: <FaProjectDiagram className="text-brand-purple" />,
  },
  {
    name: 'Page Object Model',
    category: ['All', 'Automation'],
    icon: <FaSitemap className="text-emerald-400" />,
  },
  {
    name: 'Data Driven Testing',
    category: ['All', 'Automation'],
    icon: <FaDatabase className="text-indigo-400" />,
  },
  {
    name: 'Parallel Execution',
    category: ['All', 'Automation'],
    icon: <FaBolt className="text-yellow-500" />,
  },

  // API & Functional
  {
    name: 'API Testing',
    category: ['All', 'API & Functional'],
    icon: <FaNetworkWired className="text-slate-300" />,
  },
  {
    name: 'REST API',
    category: ['All', 'API & Functional'],
    icon: <FaServer className="text-teal-400" />,
  },
  {
    name: 'GraphQL',
    category: ['All', 'API & Functional'],
    icon: <SiGraphql className="text-pink-600" />,
  },
  {
    name: 'Manual Testing',
    category: ['All', 'API & Functional'],
    icon: <FaHandPointer className="text-orange-400" />,
  },
  {
    name: 'Load Testing',
    category: ['All', 'API & Functional'],
    icon: <FaWeightHanging className="text-red-400" />,
  },

  // DevOps & Tools
  {
    name: 'GitHub Actions',
    category: ['All', 'DevOps & Tools'],
    icon: <SiGithubactions className="text-blue-400" />,
  },
  { name: 'Git', category: ['All', 'DevOps & Tools'], icon: <SiGit className="text-orange-500" /> },
  {
    name: 'Postman',
    category: ['All', 'API & Functional'],
    icon: <SiPostman className="text-orange-500" />,
  },
  {
    name: 'CI/CD Integration',
    category: ['All', 'DevOps & Tools'],
    icon: <FaCogs className="text-slate-400" />,
  },
  {
    name: 'Azure DevOps',
    category: ['All', 'DevOps & Tools'],
    icon: <VscAzureDevops className="text-blue-600" />,
  },
  {
    name: 'Bitbucket',
    category: ['All', 'DevOps & Tools'],
    icon: <SiBitbucket color="#8BC34A" aria-label="Bitbucket" />,
  },
  { name: 'Linux', category: ['All', 'DevOps & Tools'], icon: <FaLinux className="text-slate-800 dark:text-slate-200" /> },

  // IDE Tools
  { name: 'VS Code', category: ['All', 'IDE Tools'], icon: <FaCode className="text-blue-500" /> },
  { name: 'Antigravity', category: ['All', 'IDE Tools'], icon: <AntigravityIcon /> },
  { name: 'Cursor AI', category: ['All', 'IDE Tools'], icon: <CursorIcon /> },

  // Methodologies
  {
    name: 'Agile/Scrum',
    category: ['All', 'Methodologies'],
    icon: <FaSyncAlt className="text-emerald-500" />,
  },
  { name: 'JIRA', category: ['All', 'Methodologies'], icon: <SiJira className="text-blue-500" /> },
  {
    name: 'TestRail',
    category: ['All', 'Methodologies'],
    icon: <FaShieldAlt className="text-green-500" />,
  },
  {
    name: 'Risk Based Testing',
    category: ['All', 'Methodologies'],
    icon: <FaShieldAlt className="text-red-500" />,
  },
  {
    name: 'Shift Left',
    category: ['All', 'Methodologies'],
    icon: <FaArrowLeft className="text-sky-400" />,
  },
];

const categories: Category[] = [
  'All',
  'Languages',
  'Automation',
  'API & Functional',
  'DevOps & Tools',
  'IDE Tools',
  'Methodologies',
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const { setHoveredCategory } = useSkillHover();

  const filteredSkills = skillsData.filter((skill) => skill.category.includes(activeCategory));

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto w-full z-10 relative"
    >
      <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 bg-white/50 dark:bg-slate-800/60 p-2 rounded-2xl backdrop-blur-sm border border-slate-200 dark:border-transparent transition-colors duration-300">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeCategory === category
                ? 'bg-brand-purple text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 md:px-10">
        {filteredSkills.map((skill, index) => {
          const specificCategory = skill.category.find((c) => c !== 'All') as SkillCategory;
          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredCategory(specificCategory)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 transition-all duration-300 shadow-sm dark:shadow-none hover:-translate-y-1 hover:scale-[1.02] hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:shadow-lg hover:border-brand-purple dark:hover:border-brand-purple dark:hover:shadow-brand-purple/20 cursor-default group"
            >
              <span className="text-2xl flex-shrink-0 w-6 flex justify-center items-center transform transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </span>
              <span className="text-slate-700 dark:text-slate-200 font-medium text-sm md:text-base leading-tight">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
