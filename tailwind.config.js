/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#222831",
          secondary: "#393E46",
          special: "#9DB2BF",
          text: "#EEEEEE",
        },
      },
    },
  },
  plugins: [],
};

// special: #F15A59
