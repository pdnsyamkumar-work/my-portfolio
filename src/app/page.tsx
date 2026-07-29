import Link from "next/link";
import { Caveat } from "next/font/google";
import Image from "next/image";
import Skills from "@/components/Skills";
import InfinityLoop from "@/components/InfinityLoop";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <div className="relative overflow-hidden flex flex-col">
      <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-5rem)] px-4 sm:px-8 lg:px-20 overflow-hidden">
        
        {/* Left Column - Text Content */}
        <div className="w-full lg:w-1/2 z-10 pt-16 lg:pt-0 pb-12 lg:pb-0">
          <h3 className={`${caveat.className} text-brand-purple text-2xl md:text-4xl mb-4 font-bold`}>
            Do You Know Me?
          </h3>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900 dark:text-white">
          <span className="block">👋 I'm Syam</span>
          <span className="block text-slate-800 dark:text-white">Kumar</span>
        </h1>
          
          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-lg font-medium leading-relaxed">
            I am a Software Development Engineer in Test (SDET) specializing in building scalable automation frameworks with Playwright and TypeScript. I help engineering teams accelerate releases by engineering reliable CI/CD pipelines, reducing flaky tests, and ensuring robust API and UI quality.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-block px-8 py-3 bg-brand-peach hover:bg-[#e0755d] text-white rounded-full font-bold text-lg transition-transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(240,139,118,0.4)]"
          >
            Contact me
          </Link>
        </div>

        {/* Right Column - Infinity Loop */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative min-h-[500px] mt-10 lg:mt-0">
          <InfinityLoop />
        </div>
      </div>

      {/* About Me Card */}
      <div className="w-full max-w-4xl mx-auto mt-12 mb-4 px-4 relative z-10">
        <div className="bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl dark:shadow-lg backdrop-blur-sm transition-colors duration-300">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">About Me 👋</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Software Development Engineer in Test with 3.5 years of experience in building Playwright TypeScript automation frameworks for web and API services. Delivered a modular framework that cut regression cycle time by 40% and tripled test execution speed through parallelization. Achieved 85% coverage while reducing defect resolution time by 30% via CI/CD integrated API validation, and turned flaky tests into reliable suites for on-schedule releases. Passionate about automation, I continuously seek opportunities to eliminate manual bottlenecks and create smarter, faster workflows that drive better results.
          </p>
        </div>
      </div>

      <Skills />
    </div>
  );
}
