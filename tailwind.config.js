// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx}',   // include all files in the pages folder
//     './components/**/*.{js,ts,jsx,tsx}', // include all files in the components folder
//     './app/**/*.{js,ts,jsx,tsx}', // if you're using the app directory in Next.js
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // include all files in the pages folder
    './components/**/*.{js,ts,jsx,tsx}', // include all files in the components folder
    './app/**/*.{js,ts,jsx,tsx}', // if you're using the app directory in Next.js
  ],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container by default
        padding: '2rem', // Adds padding on each side
        screens: {
          sm: '100%', // Full-width for small screens
          md: '768px', // Custom width for medium screens
          lg: '1024px', // Custom width for large screens
          xl: '1280px', // Custom width for extra large screens
        },
      },
    },
  },
  plugins: [],
};
