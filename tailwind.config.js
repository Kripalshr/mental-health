/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}", "./pages/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#00bdd6",
      secondary: "#8353e2",
      blue: "#4069e5",
      orange: "#ed7d2d",
      red: "#e05858",
    },
    extend: {
      fontFamily: {
        primary: "Inter, serif",
      },
    },
  },
  plugins: [],
};
