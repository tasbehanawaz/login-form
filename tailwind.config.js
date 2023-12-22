/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // You can add more paths here if you have HTML or other JS/TS files elsewhere
  ],
  theme: {
    extend: {
      // Here you can extend the existing Tailwind theme, e.g., custom colors, spacing
    },
    // Add or modify the existing Tailwind theme as needed
  },
  variants: {
    // Define variants if needed
  },
  plugins: [
    // Add any plugins here if you are using them
  ],
};
