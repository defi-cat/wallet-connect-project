/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      colors: {
        purple: {
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          600: "#7c3aed",
          700: "#6d28d9",
        },
        gray: {
          100: "#f3f4f6",
          300: "#d1d5db",
          400: "#9ca3af",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
    },
  },
  plugins: [],
};
