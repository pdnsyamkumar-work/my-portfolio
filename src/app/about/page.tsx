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
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-200 mb-6 flex items-center gap-2">
            <span className="text-2xl">💼</span> Career Journey
          </h2>
          <div className="border-l-2 border-brand-purple/30 ml-3 space-y-10">
            
            <div className="relative pl-8 pr-4 py-4 -my-4 border border-transparent hover:-translate-y-1 hover:scale-[1.02] hover:bg-white dark:hover:bg-slate-800/80 hover:shadow-lg hover:border-brand-purple dark:hover:border-brand-purple dark:hover:shadow-brand-purple/20 rounded-2xl transition-all duration-300 group">
              <div className="absolute w-4 h-4 bg-brand-purple rounded-full -left-[9px] top-5 shadow-[0_0_10px_rgba(123,76,190,0.8)]">
                <div className="absolute inset-0 rounded-full bg-brand-purple animate-ping opacity-75"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-200 group-hover:text-brand-purple dark:group-hover:text-brand-peach transition-colors">Software Development Engineer In Test - II</h3>
              <p className="text-brand-purple dark:text-brand-peach font-semibold text-sm mb-1">KnackLabs (One Health Assist) | Oct 2025 - Present</p>
              <ul className="text-slate-600 dark:text-slate-400 text-sm list-disc ml-4 space-y-1 mt-3">
                <li>Directed manual testing while simultaneously developing Playwright/TypeScript automation framework, achieving 85% test coverage.</li>
                <li>Mentored 4-member QA team on test case prioritization (P0-P3) and defect triage, reducing resolution time by 30%.</li>
                <li>Validated multi-tenant RBAC for Admin, Doctor, Staff, and Accountant roles across web and mobile platforms.</li>
                <li>Executed parallel testing across web portal, Android/iOS apps, and led root cause analysis for 3 critical production defects.</li>
              </ul>
            </div>
            
            <div className="relative pl-8 py-4 -my-4 pr-4 border border-transparent hover:-translate-y-1 hover:scale-[1.02] hover:bg-white dark:hover:bg-slate-800/80 hover:shadow-lg hover:border-brand-purple dark:hover:border-brand-purple dark:hover:shadow-brand-purple/20 rounded-2xl transition-all duration-300 group">
              <div className="absolute w-4 h-4 bg-brand-purple/70 rounded-full -left-[9px] top-5"></div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-200 group-hover:text-brand-purple dark:group-hover:text-brand-peach transition-colors">Software Development Engineer In Test - I</h3>
              <p className="text-brand-purple/80 dark:text-brand-peach/80 font-semibold text-sm mb-1">KnackLabs (Hoichoi TV, eGain, Celito QS) | May 2024 - Sep 2025</p>
              <ul className="text-slate-600 dark:text-slate-400 text-sm list-disc ml-4 space-y-1 mt-3">
                <li>Developed Playwright (TypeScript) automation frameworks and integrated them into CI/CD pipelines for faster feedback.</li>
                <li>Tested REST APIs for Web/OTT platforms and GraphQL for CMS data validation.</li>
                <li>Conducted manual testing for web, mobile apps, and Smart TV apps (Samsung Tizen, LG WebOS) in Agile sprints.</li>
                <li>Implemented API fixtures alongside page models (POM) to generate dynamic test data directly from backend services.</li>
              </ul>
            </div>

            <div className="relative pl-8 py-4 -my-4 pr-4 border border-transparent hover:-translate-y-1 hover:scale-[1.02] hover:bg-white dark:hover:bg-slate-800/80 hover:shadow-lg hover:border-brand-purple dark:hover:border-brand-purple dark:hover:shadow-brand-purple/20 rounded-2xl transition-all duration-300 group">
              <div className="absolute w-4 h-4 bg-slate-400 dark:bg-slate-600 rounded-full -left-[9px] top-5"></div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-200 group-hover:text-brand-purple dark:group-hover:text-brand-peach transition-colors">Associate Quality Assurance Engineer</h3>
              <p className="text-brand-purple/90 dark:text-brand-peach/90 font-semibold text-sm mb-1">KnackLabs (Calibrate) | Mar 2023 - Apr 2024</p>
              <ul className="text-slate-600 dark:text-slate-400 text-sm list-disc ml-4 space-y-1 mt-3">
                <li>Designed and executed detailed manual test cases for comprehensive functional validation.</li>
                <li>Conducted thorough API testing using Postman, validating endpoints and data integrity.</li>
                <li>Performed load testing to assess system performance and identify bottlenecks.</li>
              </ul>
            </div>

            <div className="relative pl-8 py-4 -my-4 pr-4 border border-transparent hover:-translate-y-1 hover:scale-[1.02] hover:bg-white dark:hover:bg-slate-800/80 hover:shadow-lg hover:border-brand-purple dark:hover:border-brand-purple dark:hover:shadow-brand-purple/20 rounded-2xl transition-all duration-300 group">
              <div className="absolute w-4 h-4 bg-slate-300 dark:bg-slate-700 rounded-full -left-[9px] top-5"></div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-200 group-hover:text-brand-purple dark:group-hover:text-brand-peach transition-colors">GIS Engineer</h3>
              <p className="text-brand-purple/70 dark:text-brand-peach/70 font-semibold text-sm mb-1">RMSI Pvt Ltd | Tech Mahindra | Cyient Ltd | Jul 2018 - Mar 2023</p>
              <ul className="text-slate-600 dark:text-slate-400 text-sm list-disc ml-4 space-y-1 mt-3">
                <li>Developed geospatial solutions for autonomous vehicles including HD lane mapping and 3D road network modeling.</li>
                <li>Created precision digital maps and spatial databases using ArcGIS, QGIS, Cartopia, and Fusion.</li>
              </ul>
            </div>

            <div className="relative pl-8 py-4 -my-4 pr-4 border border-transparent hover:-translate-y-1 hover:scale-[1.02] hover:bg-white dark:hover:bg-slate-800/80 hover:shadow-lg hover:border-brand-purple dark:hover:border-brand-purple dark:hover:shadow-brand-purple/20 rounded-2xl transition-all duration-300 group">
              <div className="absolute w-4 h-4 bg-slate-300 dark:bg-slate-800 rounded-full -left-[9px] top-5"></div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-200 group-hover:text-brand-purple dark:group-hover:text-brand-peach transition-colors">Bio-Medical Service Engineer</h3>
              <p className="text-brand-purple/60 dark:text-brand-peach/60 font-semibold text-sm mb-1">Prime Agencies | Jan 2017 - May 2018</p>
              <ul className="text-slate-600 dark:text-slate-400 text-sm list-disc ml-4 space-y-1 mt-3">
                <li>Installed, calibrated, and maintained medical equipment in healthcare facilities.</li>
                <li>Conducted preventive maintenance and troubleshooting for diagnostic imaging systems.</li>
              </ul>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
