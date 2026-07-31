'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSkillHover } from '@/context/SkillHoverContext';

export default function HeroBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { hoveredCategory } = useSkillHover();
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame to throttle state updates for performance
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 30,
          y: (e.clientY / window.innerHeight - 0.5) * 30,
        });
      });
    };

    // Disable heavy parallax tracking on mobile devices
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen -z-20 overflow-hidden pointer-events-none select-none bg-slate-50 dark:bg-[#050810] transition-colors duration-700">
      {/* Adaptive Glass/Gradient Overlay System */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {/* Light Mode Overlay: High brightness, no glow, subtle blur to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-slate-50 dark:hidden backdrop-blur-[2px]" />

        {/* Dark Mode Overlay: Subtle shadow gradient, allows neon elements to glow underneath */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#050810]/90 hidden dark:block backdrop-blur-[0.5px]" />
      </div>

      {/* Dynamic Action Label HUD */}
      <div className="absolute bottom-10 right-10 z-40 hidden md:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={hoveredCategory || 'idle'}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 bg-white/70 dark:bg-black/60 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 px-4 py-2.5 rounded-full shadow-lg dark:shadow-none"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${hoveredCategory ? 'bg-brand-purple' : 'bg-emerald-400'}`}
              ></span>
              <span
                className={`relative inline-flex rounded-full h-2.5 w-2.5 ${hoveredCategory ? 'bg-brand-purple' : 'bg-emerald-500'}`}
              ></span>
            </span>
            <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
              {getLabelText(hoveredCategory)}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Parallax Container wrapping all layers */}
      <motion.div
        className="relative w-full h-full z-10"
        animate={{ x: mousePosition.x * -1, y: mousePosition.y * -1 }}
        transition={{ type: 'spring', stiffness: 40, damping: 30 }}
      >
        <BackgroundLayer />
        <AnimationLayer category={hoveredCategory} />
        <InteractionLayer category={hoveredCategory} />
      </motion.div>
    </div>
  );
}

function getLabelText(category: string | null) {
  switch (category) {
    case 'Languages':
      return '▶ Compiling Source...';
    case 'Automation':
      return '▶ Executing Playwright E2E Suite...';
    case 'API & Functional':
      return '▶ Asserting API Responses...';
    case 'DevOps & Tools':
      return '▶ Running CI/CD Pipeline...';
    case 'IDE Tools':
      return '▶ Analyzing Workspace...';
    case 'Methodologies':
      return '▶ Updating Sprint Backlog...';
    case 'Specialized':
      return '▶ Connecting to LLM Models...';
    default:
      return 'System Idle - Waiting for execution';
  }
}

// ---------------------------------------------------------------------------
// LAYER 1: Deep Background (Static structural elements, deeply blurred)
// ---------------------------------------------------------------------------
function BackgroundLayer() {
  return (
    <div className="absolute inset-0 opacity-10 dark:opacity-[0.15] blur-[2px] transition-opacity duration-700">
      <motion.pre
        className="absolute top-[10%] left-[5%] text-[10px] md:text-sm font-mono text-slate-400 dark:text-slate-500"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      >
        {`class TestBase {
  async setup() {
    await browser.newContext();
  }
}`}
      </motion.pre>
      <motion.pre
        className="absolute bottom-[20%] right-[10%] text-[10px] md:text-sm font-mono text-slate-400 dark:text-slate-500"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      >
        {`{
  "testConfig": {
    "timeout": 30000,
    "retries": 2
  }
}`}
      </motion.pre>
    </div>
  );
}

// ---------------------------------------------------------------------------
// LAYER 2: Contextual System Visuals (Switches based on hover)
// ---------------------------------------------------------------------------
function AnimationLayer({ category }: { category: string | null }) {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={category || 'default'}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          {(!category || category === 'Automation') && <AutomationVisuals />}
          {category === 'Languages' && <LanguageVisuals />}
          {category === 'API & Functional' && <ApiVisuals />}
          {category === 'DevOps & Tools' && <DevOpsVisuals />}
          {(category === 'IDE Tools' ||
            category === 'Methodologies' ||
            category === 'Specialized') && <MiscVisuals category={category} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Visual Themes for Layer 2:
// Note how Light Mode uses muted colors (slate-600) and NO text-shadow.
// Dark Mode enables glowing text-shadows and vibrant neon colors.

function AutomationVisuals() {
  return (
    <div className="w-full h-full relative opacity-40 dark:opacity-[0.85]">
      <motion.div
        className="absolute top-[30%] left-[10%] font-mono text-xs md:text-sm text-slate-600 dark:text-cyan-400 dark:[text-shadow:0_0_12px_rgba(34,211,238,0.8)]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        {`await expect(page.locator('.hero')).toBeVisible();`}
      </motion.div>
      <motion.div
        className="absolute bottom-[35%] right-[15%] font-mono text-xs md:text-sm text-slate-700 dark:text-emerald-400 dark:[text-shadow:0_0_12px_rgba(52,211,153,0.8)]"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <div className="flex flex-col gap-1.5">
          <span>
            <span className="text-slate-500 dark:text-emerald-500">✔</span> tests/e2e/auth.spec.ts
          </span>
          <span>
            <span className="text-slate-500 dark:text-emerald-500">✔</span>{' '}
            tests/e2e/checkout.spec.ts
          </span>
          <span className="text-slate-400 dark:text-slate-300">▶ tests/e2e/profile.spec.ts...</span>
        </div>
      </motion.div>
    </div>
  );
}

function LanguageVisuals() {
  return (
    <div className="w-full h-full relative opacity-40 dark:opacity-[0.85]">
      <motion.pre
        className="absolute top-[20%] right-[15%] text-[10px] md:text-sm font-mono text-slate-600 dark:text-blue-400 dark:[text-shadow:0_0_12px_rgba(96,165,250,0.8)]"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        {`interface User<T> {
  id: string;
  data: T;
  role: 'admin' | 'user';
}`}
      </motion.pre>
    </div>
  );
}

function ApiVisuals() {
  return (
    <div className="w-full h-full relative opacity-40 dark:opacity-[0.85]">
      <motion.pre
        className="absolute top-[40%] left-[20%] text-[10px] md:text-sm font-mono text-slate-600 dark:text-purple-400 dark:[text-shadow:0_0_12px_rgba(192,132,252,0.8)]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        {`POST /api/v1/checkout
{
  "status": 200,
  "time": "142ms",
  "payload": { "success": true }
}`}
      </motion.pre>
    </div>
  );
}

function DevOpsVisuals() {
  return (
    <div className="w-full h-full relative opacity-40 dark:opacity-[0.85]">
      <motion.div
        className="absolute top-[25%] left-[30%] font-mono text-xs md:text-sm text-slate-600 dark:text-pink-400 dark:[text-shadow:0_0_12px_rgba(244,114,182,0.8)]"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex flex-col gap-1.5">
          <span>[Build] Resolving dependencies...</span>
          <span>[Build] Fetching packages (143/200)</span>
          <span className="text-slate-400 dark:text-slate-300">
            [Build] Linking node_modules...
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function MiscVisuals({ category }: { category: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center opacity-10 dark:opacity-[0.15]">
      <motion.div
        animate={{ scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="text-4xl md:text-6xl font-mono font-bold text-slate-400 dark:text-indigo-400 dark:[text-shadow:0_0_30px_rgba(129,140,248,0.8)]"
      >
        {category === 'IDE Tools'
          ? '< VS CODE />'
          : category === 'Methodologies'
            ? 'AGILE SYNC'
            : 'AI PROCESSING'}
      </motion.div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// LAYER 3: Particles & Flowing Interactions (Responds to hover speed)
// ---------------------------------------------------------------------------
function InteractionLayer({ category }: { category: string | null }) {
  const isHovered = !!category;

  // When interacting with a skill, animations speed up slightly
  const speed = isHovered ? 0.6 : 1;

  return (
    <div className="absolute inset-0 z-20 pointer-events-none mix-blend-multiply dark:mix-blend-screen opacity-50 dark:opacity-100 transition-opacity duration-500">
      {/* Flowing Data Lines (CI/CD / Network flow feeling) */}
      <motion.div
        className="absolute w-[150px] h-[1px] bg-gradient-to-r from-transparent via-slate-400 dark:via-cyan-400 to-transparent top-[30%] left-[-150px]"
        animate={{ left: ['-150px', '100vw'] }}
        transition={{ duration: 8 * speed, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-[250px] h-[1px] bg-gradient-to-r from-transparent via-slate-400 dark:via-purple-500 to-transparent top-[70%] right-[-250px]"
        animate={{ right: ['-250px', '100vw'] }}
        transition={{ duration: 12 * speed, repeat: Infinity, ease: 'linear', delay: 2 }}
      />

      {/* Pulsing Nodes */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-slate-400 dark:bg-emerald-400 dark:shadow-[0_0_15px_rgba(52,211,153,1)] top-[20%] left-[20%]"
        animate={{
          scale: isHovered ? [1, 1.8, 1] : [1, 1.2, 1],
          opacity: isHovered ? [0.8, 1, 0.8] : [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 2 * speed, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-slate-500 dark:bg-pink-400 dark:shadow-[0_0_12px_rgba(244,114,182,1)] top-[80%] right-[30%]"
        animate={{
          scale: isHovered ? [1, 2, 1] : [1, 1.3, 1],
          opacity: isHovered ? [0.7, 1, 0.7] : [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 3 * speed, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </div>
  );
}
