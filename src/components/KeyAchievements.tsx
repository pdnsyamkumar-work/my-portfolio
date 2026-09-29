'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const achievements = [
  { value: 85, suffix: '%', label: 'Automation Coverage' },
  { value: 40, suffix: '%', label: 'Regression Cycle Reduction' },
  { value: 3, suffix: 'X', label: 'Execution Speed Improvement' },
  { value: 30, suffix: '%', label: 'Faster Defect Resolution' },
  { value: 3.8, suffix: '+', label: 'Relevant Years Exp.', isFloat: true },
  { value: 100, suffix: '+', label: 'Automated Test Cases' },
  { value: 'CI/CD', suffix: '', label: 'Integrated Validation Pipelines', isString: true },
  { value: 'Framework', suffix: '', label: 'Built Modular Playwright Framework', isString: true },
];

interface CounterProps {
  value: number | string;
  isFloat?: boolean;
  isString?: boolean;
  suffix?: string;
}

const Counter = ({ value, isFloat = false, isString = false, suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView || isString) return;

    let start = 0;
    const end = typeof value === 'number' ? value : parseFloat(value);
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, isString]);

  if (isString) return <span>{value}</span>;

  return (
    <span ref={ref}>
      {isFloat ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
};

export default function KeyAchievements() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: {
      y: -5,
      boxShadow: '0 10px 30px -10px rgba(139, 92, 246, 0.3)',
      borderColor: 'rgba(139, 92, 246, 0.5)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto w-full z-10 relative scroll-mt-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-12 text-center flex items-center justify-center gap-3"
      >
        <span>🏆</span> Key Achievements
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="bg-white/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 shadow-sm backdrop-blur-sm transition-colors flex flex-col items-center justify-center text-center cursor-default group"
          >
            <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-peach mb-3 group-hover:scale-110 transition-transform duration-300">
              <Counter
                value={item.value}
                isFloat={item.isFloat}
                isString={item.isString}
                suffix={item.suffix}
              />
            </div>
            <p className="text-slate-600 dark:text-slate-300 font-medium text-sm">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
