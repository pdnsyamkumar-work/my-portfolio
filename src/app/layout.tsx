import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SkillHoverProvider } from "@/context/SkillHoverContext";
import HeroBackground from "@/components/HeroBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syam Kumar | SDET II | Automation Engineer",
  description: "Portfolio of Syam Kumar, a Software Development Engineer in Test (SDET II) specializing in Test Automation, Playwright, API Testing, and CI/CD.",
  keywords: ["Playwright Automation Engineer", "QA Automation Engineer", "SDET Portfolio", "Syam Kumar"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-[#1e2029] dark:text-slate-50 transition-colors duration-300`}>
        <SkillHoverProvider>
          <ThemeProvider>
            <HeroBackground />
            {/* Global Opportunities Banner */}
          <div className="fixed top-0 w-full bg-gradient-to-r from-brand-purple to-brand-peach text-white text-center py-2.5 text-sm font-bold tracking-wide z-50 shadow-md">
            🚀 Actively open to new SDET opportunities — <a href="/contact" className="underline hover:text-white/80 transition-colors">Let's build reliable software together!</a>
          </div>
          <Navbar />
          <main className="flex-grow pt-[120px]">
            {children}
          </main>
          <Footer />
          </ThemeProvider>
        </SkillHoverProvider>
      </body>
    </html>
  );
}
