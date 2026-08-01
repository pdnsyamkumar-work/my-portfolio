'use client';

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';

const nodes = [
  { id: 'plan', label: 'Plan', x: 266, y: 100, color: '#8b5cf6' },
  { id: 'code', label: 'Code', x: 120, y: 98, color: '#06b6d4' },
  { id: 'build', label: 'Build', x: 118, y: 300, color: '#10b981' },
  { id: 'test', label: 'Test', x: 259, y: 298, color: '#3b82f6', highlight: true },
  { id: 'release', label: 'Release', x: 534, y: 100, color: '#f43f5e' },
  { id: 'deploy', label: 'Deploy', x: 680, y: 98, color: '#eab308' },
  { id: 'operate', label: 'Operate', x: 682, y: 300, color: '#f97316' },
  { id: 'monitor', label: 'Monitor', x: 541, y: 298, color: '#d946ef' },
];

export default function InfinityLoop() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 3, ease: 'easeInOut' },
    },
  };

  const drawPath =
    'M 400 200 C 300 50, 50 50, 50 200 C 50 350, 300 350, 400 200 C 500 50, 750 50, 750 200 C 750 350, 500 350, 400 200';

  return (
    <div className="relative w-full max-w-[800px] aspect-[2/1] flex items-center justify-center">
      {/* Center Content moved inside SVG as foreignObject */}

      {/* SVG Infinity Loop */}
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full drop-shadow-2xl"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="loopGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="25%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#f43f5e" />
            <stop offset="75%" stopColor="#d946ef" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Base Track */}
        <path
          d={drawPath}
          fill="none"
          stroke="currentColor"
          className="text-slate-200 dark:text-slate-800"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Animated Stroke */}
        <motion.path
          d={drawPath}
          fill="none"
          stroke="url(#loopGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          style={{ filter: 'url(#glow)' }}
        />

        {/* Continuous moving particle */}
        <motion.circle
          r="6"
          fill="#fff"
          style={
            {
              filter: 'url(#glow)',
              offsetPath: `path("${drawPath}")`,
            } as any
          }
          animate={{
            offsetDistance: ['0%', '100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Nodes */}
        {nodes.map((node) => (
          <g
            key={node.id}
            className="cursor-pointer"
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            onClick={() => {
              if (window.innerWidth < 1024) {
                // On mobile/tablet, tap to toggle the tooltip
                setHoveredNode(hoveredNode === node.id ? null : node.id);
              } else if (node.id === 'test') {
                // On desktop, click to scroll
                document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {/* Pulse effect for highlighted node */}
            {node.highlight && (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="28"
                fill={node.color}
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}

            {/* Node Circle */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="14"
              fill={node.color}
              animate={{
                scale: hoveredNode === node.id ? 1.25 : 1,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            />

            {/* Node Label */}
            <motion.text
              x={node.x}
              y={node.y > 200 ? node.y + 38 : node.y - 26}
              textAnchor="middle"
              className="text-lg font-bold text-slate-700 dark:text-slate-300 pointer-events-none select-none"
              fill="currentColor"
              animate={{
                opacity: hoveredNode === node.id || node.highlight ? 1 : 0.7,
                scale: hoveredNode === node.id ? 1.1 : 1,
              }}
            >
              {node.label}
            </motion.text>

            {/* Special Label for Test Node */}
            {node.highlight && hoveredNode === node.id && (
              <motion.g
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <rect
                  x={node.x - 120}
                  y={node.y + 48}
                  width="240"
                  height="36"
                  rx="18"
                  fill="#3b82f6"
                  className="shadow-lg"
                />
                <text
                  x={node.x}
                  y={node.y + 72}
                  textAnchor="middle"
                  className="text-base font-bold fill-white pointer-events-none"
                >
                  This is where I excel 🚀
                </text>
              </motion.g>
            )}
          </g>
        ))}

        {/* Center Content in SVG to perfectly scale with nodes (placed here to render ON TOP of the loop) */}
        <foreignObject
          x="100"
          y="90"
          width="600"
          height="220"
          className="pointer-events-none z-10"
        >
          <div className="flex flex-col items-center justify-center w-full h-full p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: hoveredNode === 'test' ? 1 : 0,
                scale: hoveredNode === 'test' ? 1 : 0.8,
              }}
              transition={{ duration: 0.3 }}
              className="bg-white/40 dark:bg-slate-900/70 backdrop-blur-md px-8 py-5 rounded-3xl border border-blue-500/50 bg-blue-50/50 dark:bg-blue-900/30 shadow-2xl shadow-blue-500/20 flex flex-col items-center w-full max-w-[500px]"
            >
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2 whitespace-nowrap">
                Syam Kumar
              </h2>
              <div className="text-blue-600 dark:text-blue-400 font-bold text-lg text-center flex flex-wrap justify-center gap-x-2 gap-y-1 mt-1 leading-snug">
                <span>SDET</span> <span className="opacity-40">|</span> <span>Playwright</span> <span className="opacity-40">|</span> <span>TypeScript</span> <span className="opacity-40">|</span> <span>REST & GraphQL</span> <span className="opacity-40">|</span> <span>CI/CD</span>
              </div>
            </motion.div>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
