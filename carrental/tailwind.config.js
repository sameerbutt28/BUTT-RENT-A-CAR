/** @type {import('tailwindcss').Config} */
import tailwindcss from 'tailwindcss';

const Config = tailwindcss.Config;

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}