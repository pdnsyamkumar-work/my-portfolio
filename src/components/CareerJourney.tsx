'use client';

import { useState } from 'react';
import { FaChevronRight, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const journeyData = [
  {
    id: 1,
    title: 'Software Development Engineer In Test - II',
    company: (
      <>
        <a
          href="https://www.knacklabs.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-brand-purple transition-colors"
        >
          KnackLabs
        </a>{' '}
        | Client:{' '}
        <a
          href="https://flipspaces.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-brand-purple transition-colors"
        >
          Flipspaces
        </a>
      </>
    ),
    period: 'Apr 2026 - Present',
    dotColor: 'bg-brand-purple',
    dotGlow: 'shadow-[0_0_10px_rgba(123,76,190,0.8)]',
    hasPing: true,
    titleColor: 'text-brand-purple dark:text-brand-peach',
    companyColor: 'text-brand-purple dark:text-brand-peach',
    details: [
      'Architected a modular Playwright/TypeScript framework with ProofHub-linked test cases, delivering parallel execution that cut regression cycle time by 40%.',
      'Directed test orchestration with CI/CD pipelines, implementing shift-left flaky test reduction that automated regression suites and lowered release blockers by 25%.',
      'Defined risk-based test strategy and smoke test suites, documenting design standards and aligning execution with Agile sprint goals.',
      'Collaborated with engineering and product teams to map defects to ProofHub requirements, enhancing observability and accelerating delivery through clear communication.',
    ],
  },
  {
    id: 2,
    title: 'Software Development Engineer In Test - I',
    company: (
      <>
        <a
          href="https://www.knacklabs.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-brand-purple transition-colors"
        >
          KnackLabs
        </a>{' '}
        | Clients: One Health Assist, Hoichoi TV, eGain, Celito Tech
      </>
    ),
    period: 'May 2025 - Mar 2026',
    dotColor: 'bg-brand-purple/70',
    dotGlow: '',
    hasPing: false,
    titleColor: 'text-brand-purple dark:text-brand-peach',
    companyColor: 'text-brand-purple/80 dark:text-brand-peach/80',
    details: [
      'Led dual-track manual and Playwright/TypeScript automation, achieving 85% test coverage while documenting functional test cases and applying risk-based selection to cut regression effort by 35%.',
      'Mentored a 4-member QA team on JIRA-driven defect triage and prioritization, reducing average resolution time by 30% via clear communication.',
      'Validated REST and GraphQL APIs for high-volume, multi-tenant systems, executing functional and regression API tests to ensure contract compliance and data integrity.',
      'Engineered reusable API fixtures and data-driven test generation, applying shift-left test design to reduce flakiness and validate Smart TV compatibility on Tizen and WebOS.',
      'Integrated Playwright test suites into Azure DevOps CI/CD pipelines, enabling automated execution on each pull request and reducing manual regression effort.',
      'Created SQL data setup scripts for test environments, ensuring consistent test data across parallel executions.',
    ],
  },
  {
    id: 3,
    title: 'Associate Quality Assurance Engineer',
    company: (
      <>
        <a
          href="https://www.knacklabs.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-brand-purple transition-colors"
        >
          KnackLabs
        </a>{' '}
        | Clients: Calibrate, Ardelyx, TVS Motors, Betagged
      </>
    ),
    period: 'Mar 2023 - Apr 2024',
    dotColor: 'bg-slate-400 dark:bg-slate-600',
    dotGlow: '',
    hasPing: false,
    titleColor: 'text-brand-purple dark:text-brand-peach',
    companyColor: 'text-brand-purple/90 dark:text-brand-peach/90',
    details: [
      'Executed Salesforce integration testing with 500+ SOQL queries, documenting results in JIRA and maintaining 99.9% data integrity for an iOS application.',
      'Led end-to-end QA for a WatchOS EV control app, performing manual functional, regression, and smoke tests to verify remote lock/unlock and real-time sync.',
      'Identified 150+ critical defects during platform revalidation, applying risk-based testing and documenting findings in JIRA to stabilize the live platform.',
      'Conducted manual, API (Postman), and load testing within CI/CD pipelines, executing tests to uncover performance bottlenecks across client platforms.',
    ],
  },
  {
    id: 4,
    title: 'GIS Engineer',
    company: (
      <>
        <a
          href="https://www.rmsi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-brand-purple transition-colors"
        >
          RMSI Pvt Ltd
        </a>{' '}
        |{' '}
        <a
          href="https://www.techmahindra.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-brand-purple transition-colors"
        >
          Tech Mahindra
        </a>{' '}
        |{' '}
        <a
          href="https://www.cyient.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-brand-purple transition-colors"
        >
          Cyient Ltd
        </a>
      </>
    ),
    period: 'Jul 2018 - Mar 2023',
    dotColor: 'bg-slate-300 dark:bg-slate-700',
    dotGlow: '',
    hasPing: false,
    titleColor: 'text-brand-purple dark:text-brand-peach',
    companyColor: 'text-brand-purple/70 dark:text-brand-peach/70',
    details: [
      'Developed geospatial solutions for autonomous vehicles (Apple Maps, Go Hunt, TomTom Maps), including HD lane mapping and 3D road network modeling using ArcGIS, QGIS, Cartopia, and FusionX.',
    ],
  },
  {
    id: 5,
    title: 'Bio-Medical Service Engineer',
    company: 'Prime Agencies',
    period: 'Jan 2017 - May 2018',
    dotColor: 'bg-slate-300 dark:bg-slate-800',
    dotGlow: '',
    hasPing: false,
    titleColor: 'text-brand-purple dark:text-brand-peach',
    companyColor: 'text-brand-purple/60 dark:text-brand-peach/60',
    details: [
      'Installed, calibrated, and maintained diagnostic medical equipment in healthcare facilities; conducted preventive maintenance and staff training.',
    ],
  },
];

export default function CareerJourney() {
  const renderPeriod = (period: string) => {
    if (period.includes('Present')) {
      const parts = period.split('Present');
      return (
        <>
          {parts[0]}
          <span className="animate-pulse text-green-500 font-bold drop-shadow-[0_0_5px_rgba(34,197,94,0.8)]">
            Present
          </span>
          {parts[1]}
        </>
      );
    }
    return period;
  };
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const isSplitView = selectedId !== null;
  const activeJob = journeyData.find((j) => j.id === selectedId);

  return (
    <section
      id="career"
      className="py-20 px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto w-full z-10 relative transition-all duration-500 scroll-mt-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-12 flex items-center justify-center gap-3"
      >
        <span>💼</span> Career Journey
      </motion.h2>

      <div
        className={`grid transition-all duration-500 gap-8 ${isSplitView ? 'lg:grid-cols-12' : 'grid-cols-1'}`}
      >
        {/* Left Side: Timeline */}
        <div className={`${isSplitView ? 'lg:col-span-5' : 'col-span-1 max-w-4xl mx-auto w-full'}`}>
          <div className="border-l-2 border-brand-purple/30 ml-3 space-y-8">
            {journeyData.map((job) => {
              const isSelected = selectedId === job.id;
              // Allow inline auto-expand on hover even if right panel is open
              const isHoverExpanded = hoveredId === job.id;
              const isExpanded = isSelected || isHoverExpanded;

              return (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5 }}
                  key={job.id}
                  className="relative pl-8 group"
                  onMouseEnter={() => setHoveredId(job.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute w-4 h-4 ${job.dotColor} rounded-full -left-[9px] top-6 ${job.dotGlow} group-hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] transition-shadow duration-300`}
                  >
                    {job.hasPing && (
                      <div className="absolute inset-0 rounded-full bg-brand-purple animate-ping opacity-75"></div>
                    )}
                  </div>

                  {/* Interactive Hover Card */}
                  <div
                    onClick={() => setSelectedId(isSelected ? null : job.id)}
                    className={`p-6 border hover:-translate-y-1 hover:shadow-xl hover:border-brand-purple dark:hover:border-brand-purple dark:hover:shadow-brand-purple/20 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden origin-left
                      ${
                        isSelected
                          ? 'border-brand-purple/50 bg-white/80 dark:bg-slate-800/80 shadow-md ring-1 ring-brand-purple/20'
                          : isHoverExpanded
                            ? 'border-brand-purple/30 bg-white dark:bg-slate-800/70 shadow-lg'
                            : 'border-transparent bg-white/40 dark:bg-slate-800/20 hover:bg-white dark:hover:bg-slate-800/80'
                      }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="pr-4">
                        <h3
                          className={`text-xl font-bold text-slate-900 dark:text-slate-200 group-hover:${job.titleColor} transition-colors ${isSelected ? job.titleColor : ''}`}
                        >
                          {job.title}
                        </h3>
                        <p className={`${job.companyColor} font-semibold text-sm mb-1`}>
                          {job.company} | {renderPeriod(job.period)}
                        </p>
                      </div>

                      {/* Chevron Arrow */}
                      <div
                        className={`text-slate-400 group-hover:${job.titleColor} transition-transform duration-300 ml-2 shrink-0 ${isSelected ? 'rotate-0 text-brand-purple' : 'rotate-0'}`}
                      >
                        {isSplitView ? (
                          <FaChevronRight className={isSelected ? 'text-brand-purple' : ''} />
                        ) : (
                          <FaChevronRight
                            className={`transform ${isHoverExpanded ? 'rotate-90' : 'rotate-0'}`}
                          />
                        )}
                      </div>
                    </div>

                    {/* Inline Expansion (Visible on hover, OR visible on click for mobile only) */}
                    <AnimatePresence>
                      {(isHoverExpanded || (isSplitView && isSelected)) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className={isSplitView && isSelected ? 'lg:hidden' : ''}
                        >
                          <div className="pt-4 border-t border-slate-200 dark:border-slate-700/50 mt-4">
                            <ul className="text-slate-600 dark:text-slate-400 text-sm list-disc ml-4 space-y-2">
                              {job.details.map((detail, idx) => (
                                <li key={idx}>{detail}</li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Sticky Details Panel (Only visible in Split View) */}
        <AnimatePresence>
          {isSplitView && activeJob && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-7 hidden lg:block"
            >
              <div className="sticky top-28 bg-white/60 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  <FaTimes />
                </button>

                <h3 className={`text-3xl font-extrabold ${activeJob.titleColor} mb-2 pr-8`}>
                  {activeJob.title}
                </h3>
                <h4 className="text-lg text-slate-700 dark:text-slate-300 font-semibold mb-6">
                  {activeJob.company}{' '}
                  <span className="text-slate-500 font-normal">
                    | {renderPeriod(activeJob.period)}
                  </span>
                </h4>

                <div className="h-px w-full bg-gradient-to-r from-brand-purple/50 to-transparent mb-6"></div>

                <h5 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                  Key Responsibilities & Achievements
                </h5>
                <ul className="text-slate-600 dark:text-slate-300 space-y-4 text-base leading-relaxed">
                  {activeJob.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-brand-purple mr-3 mt-1 text-sm">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
