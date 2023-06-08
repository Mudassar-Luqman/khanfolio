/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-yellow": "#FFB400",
        "primary-dark": "#212428",
        "primary-text-gray": "#8B8E93",
        "dark-color": "#101214",
      },
    },
  },
  plugins: [],
};
