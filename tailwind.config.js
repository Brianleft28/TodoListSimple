/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {},
  extend: {},
  daisyui: {
    styled: true,
    darkTheme: "forest",
    lightTheme: "cupcake",
    themes: ["forest", "cupcake"],
  },
  plugins: [require("daisyui")],
};
