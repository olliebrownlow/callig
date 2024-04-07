/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        creampink: "#F6E4D9",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-mea-culpa)'],
      }
    },
  },
  plugins: [],
  // darkMode: "selector",
};
