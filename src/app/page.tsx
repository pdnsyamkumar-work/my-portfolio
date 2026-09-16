import Link from 'next/link';
import { Caveat } from 'next/font/google';
import InfinityLoop from '@/components/InfinityLoop';
import AboutSection from '@/components/AboutSection';
import KeyAchievements from '@/components/KeyAchievements';
import CareerJourney from '@/components/CareerJourney';
import Skills from '@/components/Skills';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });

export default function Home() {
  return (
    <div className="relative overflow-hidden flex flex-col">
      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-5rem)] px-4 sm:px-8 lg:px-20 overflow-hidden scroll-mt-32"
      >
        {/* Left Column - Text Content */}
        <div className="w-full lg:w-1/2 z-10 pt-16 lg:pt-0 pb-12 lg:pb-0 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h3
            className={`${caveat.className} text-brand-purple text-2xl md:text-4xl mb-4 font-bold`}
          >
            Do You Know Me?
          </h3>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900 dark:text-white">
            <span className="block">👋 I&apos;m Syam</span>
            <span className="block text-slate-800 dark:text-white">Kumar</span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-lg font-medium leading-relaxed">
            I am a Software Development Engineer in Test (SDET) specializing in building scalable
            automation frameworks with Playwright and TypeScript. I help engineering teams
            accelerate releases by engineering reliable CI/CD pipelines, reducing flaky tests, and
            ensuring robust API and UI quality.
          </p>

          <Link
            href="#contact"
            className="inline-block px-8 py-3 bg-brand-peach hover:bg-[#e0755d] text-white rounded-full font-bold text-lg transition-transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(240,139,118,0.4)]"
          >
            Contact me
          </Link>
        </div>

        {/* Right Column - Infinity Loop */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative min-h-[400px] lg:min-h-[500px] mt-10 lg:mt-0">
          <InfinityLoop />
        </div>
      </section>

      {/* Sequential SPA Sections */}
      <AboutSection />

      <KeyAchievements />

      <CareerJourney />

      <Skills />

      <ProjectsSection />

      <ContactSection />
    </div>
  );
}
