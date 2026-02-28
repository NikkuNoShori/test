/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: { DEFAULT: '#1a1a2e', mid: '#232340' },
        accent: { DEFAULT: '#e8a838', hover: '#f0bc5e' },
        light: { DEFAULT: '#faf9f6', warm: '#f3f1ec' },
        body: { DEFAULT: '#3a3a4a', light: '#7a7a8a' },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
