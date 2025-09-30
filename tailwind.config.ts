/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/rizzui/dist/**/*.{js,ts,jsx,tsx}", // if using RizzUI
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          850: "#1e293b",
        },
      },
    },
  },
  plugins: [],
};
