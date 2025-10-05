/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warmWhite: '#FDF6EC',
        softBlue: '#A9CFE7',
      },
      boxShadow: {
        // Custom glow effect
        'glow': '0 0 15px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.7), 0 0 60px rgba(0, 255, 255, 0.7)',
        'glow-hover': '0 0 25px rgba(0, 255, 255, 1), 0 0 50px rgba(0, 255, 255, 1), 0 0 100px rgba(0, 255, 255, 1)',
      }
    },
  },
  plugins: [], // Remove the @tailwindcss/filters plugin here
}
