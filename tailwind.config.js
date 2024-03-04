/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "6rem",
        },
        center: true,
      },
    },
    screens: {
      sm: { min: "365px", max: "767px" },

      md: { min: "768px", max: "1023px" },

      lg: { min: "1280px", max: "1535px" },

      xl: { min: "1912px" },
    },
    fontSize: {
      "xl-custom": "1.125rem",
    },
  },
  plugins: [],
};
