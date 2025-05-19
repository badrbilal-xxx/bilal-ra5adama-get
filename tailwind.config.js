/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A0D16',
          dark: '#050710',
          light: '#151B2E',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B0B3BE',
          muted: '#9CA3AF',
        },
        accent: {
          green: '#22C55E',
          cyan: '#4EFFED',
          yellow: '#FFB800',
        },
        border: '#1F2937',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'Cairo', 'Noto Kufi Arabic', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        arabic: ['Noto Kufi Arabic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};