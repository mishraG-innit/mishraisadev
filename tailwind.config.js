
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Fira Code", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--foreground)",
        muted: {
          DEFAULT: "rgba(128, 128, 128, 0.1)",
          foreground: "rgba(128, 128, 128, 0.7)",
        },
        accent: "#3b82f6",
      },
    },
  },
  plugins: [],
}
