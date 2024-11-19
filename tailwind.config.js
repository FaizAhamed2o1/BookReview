/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "lg-1100": "1100px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      colors: {
        customBlack: "#131313",
        customPrimaryGreen: "#23be0a",
        customSecondaryBlue: "#59c6d2",
        customGrayBg: "#1313130c",
        customGray08: "#131313cc",
        customGray07: "#131313b3",
        customGray06: "#13131399",
      },

      fontFamily: {
        heading: ["Playfair Display", "serif"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
