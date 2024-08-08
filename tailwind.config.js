/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'alnago-1': '#f1d12b',
        'alnago-2': '#211915',
        'alnago-3': '#ff9933',
      },
    },
  },
  plugins: [],
}

