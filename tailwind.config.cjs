// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A2647", // deep navy
        secondary: "#1E5F74", // teal-ish
        success: "#2E7D32", // green
        warning: "#EF6C00", // amber/orange
        danger: "#C62828", // red
        info: "#1565C0", // blue
      },
    },
  },
  plugins: [],
};
