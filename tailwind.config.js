/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true, // Centers the container
      padding: '40px', // Adds padding to the container
    },
    extend: {},
  },
  plugins: [],
}
