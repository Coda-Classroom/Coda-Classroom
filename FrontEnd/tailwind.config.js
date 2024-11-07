/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        maPolice: ['Luciole'], // nom de la police personnalisée
      },
      colors: {
        darkviolet: '#060833',
        darkviolet_sombre: '#080a25',
    },
  },
  plugins: [],
}
};



