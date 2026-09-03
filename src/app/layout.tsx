import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SkillHoverProvider } from '@/context/SkillHoverContext';
import HeroBackground from '@/components/HeroBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Syam Kumar | SDET II | Automation Engineer',
  description:
    'Portfolio of Syam Kumar, a Software Development Engineer in Test (SDET II) specializing in Test Automation, Playwright, API Testing, and CI/CD.',
  icons: {
    icon: '/syam-portfolio-favicon.png',
  },
  keywords: [
    'Playwright Automation Engineer',
    'QA Automation Engineer',
    'SDET Portfolio',
    'Syam Kumar',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-[#1e2029] text-slate-50`}
      >
        <SkillHoverProvider>
          <HeroBackground />
            {/* Sticky Header Container */}
            <div className="sticky top-0 z-50 flex flex-col w-full shadow-md">
              {/* Global Opportunities Banner */}
              <div className="w-full bg-gradient-to-r from-brand-purple to-brand-peach text-white text-center py-2.5 px-4 text-sm font-bold tracking-wide relative">
                <div className="flex flex-col md:flex-row items-center justify-center md:gap-x-2 leading-relaxed md:leading-normal">
                  <span className="inline-block text-center">
                    <span className="relative inline-flex h-3 w-3 shrink-0 mr-3 align-baseline translate-y-[1px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,1)]"></span>
                    </span>
                    <span className="inline-block animate-heartbeat drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] origin-left">
                      Open to New SDET Opportunities
                    </span>
                  </span>
                  <span className="hidden md:inline mx-4">|</span>
                  <Link
                    href="/#contact"
                    className="inline-block underline hover:text-white/80 transition-colors animate-heartbeat-delayed drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] origin-left"
                  >
                    Let&apos;s build reliable Software Together!
                  </Link>
                </div>
              </div>
              <Navbar />
            </div>
            <main className="flex-grow relative z-10">{children}</main>
          <Footer />
        </SkillHoverProvider>
      </body>
    </html>
  );
}
