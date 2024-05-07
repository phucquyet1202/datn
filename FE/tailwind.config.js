/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#475BE8",
        secondary: "#DADEFA",

        light: "#FCFCFC",
        textLight: "#11142D",
        textLight2nd: "#808191",
        divideLight: "#E4E4E4",
        backgroundLight: "#F4F4F4",

        dark: "#1A1D1F",
        textDark: "#EFEFEF",
        textDark2nd: "#6F767E",
        divideDark: "#272B30",
        backgroundDark: "#111315",
      },

      fontFamily: {
        Montserrat: "Montserrat, sans-serif",
        Island: "Island Moments, cursive",
      },
    },
  },
  plugins: [],
};
