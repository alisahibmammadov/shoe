/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        jadeColor: "#5CBE3A",
        jadeColorHover: "#CAFDBB",
        textColor: "#051101",
      },
    },
  },
  plugins: [],
};
