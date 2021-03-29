module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: "0.3rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "5rem",
      },
    },
    // screens: {
    //   "2xl": {min: "1280px"},
    //   // => @media (max-width: 1535px) { ... }

    //   xl: {max: "1279px"},
    //   // => @media (max-width: 1279px) { ... }

    //   lg: {max: "1023px"},
    //   // => @media (max-width: 1023px) { ... }

    //   md: {max: "767px"},
    //   // => @media (max-width: 767px) { ... }

    //   sm: {max: "639px"},
    //   // => @media (max-width: 639px) { ... }
    // },
    extend: {
      spacing: {
        1.3: "0.32rem",
        34: "8.5rem",
        42: "10.5rem",
        102: "39.5rem",
        103: "45rem",
        105: "48rem",
        110: "52rem",
        88: "21rem",
        73: "18.7rem",
        89: "22.5rem",
        99: "31.5rem",
        90: "23.5rem",
        18: "4.5rem",
        98: "28rem",
        97: "24.5rem",
        98.6: "30rem",
        100: "36.7rem",
        46: "11.5rem",
        47: "11.7rem",
        111: "58rem",
      },
    },
    boxShadow: {
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
