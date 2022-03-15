const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0000c5",
        secondary: "#8694ff",
      },
      fontFamily: {
        myfont: ["GmarketSans", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/forms")],
};
