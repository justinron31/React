/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderWidth: {
        5: "5px", // Add 5px custom border width
      },
      scale: {
        200: "2", // Adds a custom scale value of 132%
      },
    },
  },
  plugins: [],
};
