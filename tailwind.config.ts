/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "blackCustomColor": "#000000",
        "blueCustomColor" : "#1A406D",
        "greenCustomColor" : "#38761D"
      },
    },
  },
  plugins: [],
};