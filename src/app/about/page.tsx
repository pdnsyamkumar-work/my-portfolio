export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8">
        About <span className="text-brand-purple">Me</span>
      </h1>
      
      <div className="space-y-12">
        <section className="bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 shadow-md dark:shadow-none backdrop-blur-sm transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-200 mb-6">Professional Summary</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
            I am an SDET II with over 2 years of experience specializing in Test Automation, Playwright, API Testing, and CI/CD. 
            My primary goal is to build scalable, maintainable automation frameworks that ensure software reliability and accelerate release cycles.
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-200 mb-4">Key Achievements</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-sky-400 mr-3">🚀</span>
              <span className="text-slate-600 dark:text-slate-300">Reduced regression time by 40% through efficient parallel execution strategies.</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-400 mr-3">🛡️</span>
              <span className="text-slate-600 dark:text-slate-300">Achieved 85% test coverage across critical application workflows.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-200 mb-4">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700/50">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Automation</h3>
              <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-1">
                <li>Playwright</li>
                <li>Selenium</li>
                <li>UI Automation</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700/50">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Languages</h3>
              <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-1">
                <li>TypeScript</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700/50">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Testing & DevOps</h3>
              <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-1">
                <li>REST & GraphQL APIs</li>
                <li>Azure DevOps</li>
                <li>GitHub Actions</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-200 mb-6">Experience</h2>
          <div className="border-l-2 border-brand-purple/30 ml-3 space-y-8">
            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-brand-purple rounded-full -left-[9px] top-1"></div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-200">Software Development Engineer in Test (SDET)</h3>
              <p className="text-brand-purple dark:text-sky-400 font-semibold text-sm mb-2">Company Name | Date - Present</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Building scalable Playwright & TypeScript automation frameworks, enhancing API testing, and integrating reliable CI/CD pipelines.</p>
            </div>
            
            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-slate-600 rounded-full -left-[9px] top-1"></div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-200">Bio Medical Service Engineer</h3>
              <p className="text-slate-500 text-sm mb-2">Prime Agencies | Jan 2017 - May 2018</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Installed, calibrated, and maintained medical equipment in healthcare facilities. Conducted preventive maintenance and troubleshooting for diagnostic imaging systems.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
