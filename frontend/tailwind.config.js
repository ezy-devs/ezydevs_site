/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    // "../backend/**/templates/**/*.html", // optional if using Tailwind in Django templates
  ],
  theme: {
    extend: {
      colors: {
        void: '#0B0C10',       // Main Background
        slate: '#1F2833',      // Secondary Background / Cards
        steel: '#C5C6C7',      // Primary Text
        emerald: '#45A29E',    // Accents / Active States
        highlight: '#66FCF1',  // High Value Highlights
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1F2833 1px, transparent 1px), linear-gradient(to bottom, #1F2833 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
