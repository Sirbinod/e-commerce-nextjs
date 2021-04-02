module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: {
        555: "#83B735",
      },
      red: {
        555: "#D80005",
        666: "#F42C2C",
        444: "#FF6253",
      },
      white: {
        100: "#FFFFFF",
      },
      yellow: {
        555: "#FED700",
      },
      gray: {
        111: "#D4D4D4",
        222: "#696969",
        333: "#E5E5E5",
        444: "#F5F5F5",
        555: "#223263",
      },
      blue: {
        111: "#0564D2",
        222: "#add8e6",
      },
    },
    fontFamily: {
      sans: ["Roboto"],
    },
    container: {
      padding: {
        DEFAULT: "0.3rem",
        sm: "0.5rem",
        md: "1.5rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "6rem",
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
    fontSize: {
      xxs: ".6rem",
      xs: ".7rem",
      "xs-1": ".8rem",
      "sm-2": ".938rem",
      "sm-5": "1.063",
      "xl-1": "1.125rem",
      "xl-3": "1.313rem",
      "xl-2": "1.625rem",
    },
    extend: {
      lineHeight: {
        "l-1": "1.125rem",
        "l-7": "1.875rem",
        150: "150%",
        250: "250%",
      },
      spacing: {
        0.4: "0.20rem",
        1.2: "0.3rem",
        1.6: "0.42rem",
        7.2: "1.875rem",
        17: "3.638",
        18: "4.5rem",
        30: "7.5rem",
        34: "8.5rem",
        35: "8.8rem",

        41: "10.3rem",
        46: "11.4rem",
        47: "11.7rem",
        49: "12.2rem",
        54: "13.8rem",
        62: "15.3rem",
        65: "16.2rem",
        70: "16.7rem",
        72.5: "18.25rem",
        73: "18.7rem",
        81: "20.2rem",
        82: "20.5rem",
        88: "21rem",
        89: "22.5rem",
        90: "23rem",
        96.5: "27rem",
        97: "24.5rem",
        98.6: "30rem",
        99: "31.5rem",
        90: "23.5rem",
        98: "28rem",
        99: "31rem",
        100: "36.7rem",
        102: "39.5rem",
        103: "40rem",
        104: "44rem",
        105: "48rem",
        110: "52rem",
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
