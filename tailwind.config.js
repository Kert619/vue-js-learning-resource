/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        normal: "0 0 10px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light",
  },
};
