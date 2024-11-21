/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        maPolice: ["Luciole"], // nom de la police personnalisée
      },
      colors: {
        darkviolet: "#C7E9F7",
        darkviolet_sombre: "#C7E9F7",
      },
    },
    plugins: [],
  },
};
