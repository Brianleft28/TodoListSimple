/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },

 
  
  },
  extend: {

  },
  daisyui: {
    styled: true,
    darkTheme: "business",
    lightTheme: "cupcake",
    themes: ["business", "cupcake"],
  },
  plugins: [require("daisyui")],
};
