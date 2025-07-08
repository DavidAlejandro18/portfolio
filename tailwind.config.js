/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /text-(blue|green|yellow|purple|orange)-(300|400)/,
    },
    {
      pattern: /bg-(blue|green|yellow|purple|orange)-600\/20/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
