/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-peach': '#f08b76',
        'brand-purple': '#7b4cbe',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)', color: 'inherit' },
          '50%': { transform: 'scale(1.05)', color: '#4ade80' },
        },
      },
      animation: {
        'heartbeat': 'heartbeat 4s ease-in-out infinite',
        'heartbeat-delayed': 'heartbeat 4s ease-in-out infinite 2s',
      },
    },
  },
  plugins: [],
};
