/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#9333EA",
        background: "#F9FAFB",
        text: "#111827",
      },
      borderRadius: {
        small: "8px",
        medium: "12px",
        large: "16px",
      },
    },
  },
  plugins: [],
};
