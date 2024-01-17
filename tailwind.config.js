/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        monumen: ["monumen"],
        poppins: ["poppins"],
      },
      colors: {
        primary: "#FBAE3C",
        danger: "#dc2626",
        california: "#F69609",
      },
    },
  },
  plugins: [],
};
