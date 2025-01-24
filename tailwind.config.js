const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        italiana: ["var(--font-italiana)", fontFamily.sans],
        inter: "Inter Tight",
      },
    },
  },
  keyframes: {
    "wave_10s_-3s_linear_infinite": {
      "0%": { transform: "translate3d(0, 0, 0)" },
      "100%": { transform: "translate3d(-50%, 0, 0)" },
    },
    wave_18s_linear_reverse_infinite: {
      "0%": { transform: "translate3d(0, 0, 0)" },
      "100%": { transform: "translate3d(-200%, 0, 0)" },
    },
  },
  plugins: [],
};
