/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#277589",
        secondary: "#D2DE32", // Emerald 200
        typography: "#171717",
        "light-text": "#171717",
        "dark-text": "#FDF4F5",
      },
    },
  },
  plugins: [],
};
