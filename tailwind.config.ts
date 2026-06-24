import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0a0e16', light: '#0e1320' },
        panel: '#141a29',
        panel2: '#1c1530',
        pink: { DEFAULT: '#ff2a85', soft: '#ff6fb0', deep: '#c81866', faint: '#ff2a8533' },
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 16px rgba(255,42,133,.55), 0 0 36px rgba(255,42,133,.25)',
        neonLg: '0 0 28px rgba(255,42,133,.6), 0 0 70px rgba(255,42,133,.35)',
        card: '0 10px 30px -12px rgba(0,0,0,.7)',
        cardGlow: '0 0 0 1px rgba(255,42,133,.25), 0 14px 34px -12px rgba(0,0,0,.7)',
      },
      keyframes: {
        blink: { '0%,49%': { opacity: '1' }, '50%,100%': { opacity: '0' } },
        floaty: { '0%,100%': { transform: 'translateY(0) rotate(0deg)' }, '50%': { transform: 'translateY(-14px) rotate(6deg)' } },
        floatySlow: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        pulseGlow: { '0%,100%': { opacity: '.45' }, '50%': { opacity: '.85' } },
        spinSlow: { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        floaty: 'floaty 7s ease-in-out infinite',
        floatySlow: 'floatySlow 5s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        spinSlow: 'spinSlow 22s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
