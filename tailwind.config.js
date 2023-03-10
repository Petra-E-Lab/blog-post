module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "550px" },
      md: { min: "551px", max: "1050px" },
    },
    extend: {
      colors: {
        black_900_0c: "#0000000c",
        white_A700: "#ffffff",
        gray_50: "#fafcff",
        bluegray_50: "#e6ebef",
        colors: "#d0021b",
        blue_A700: "#0061ff",
        bluegray_600: "#5f6c86",
        bluegray_100_4c: "#d8d8d84c",
        red_700: "#d13329",
        bluegray_900: "#262b35",
        bluegray_900_99: "#262b3599",
      },
      boxShadow: { bs: "0px 11px  35px 0px #0000000c" },
      borderRadius: {
        radius2: "2px",
        radius4: "4px",
        radius13: "13px",
        radius21: "21px",
        radius24: "24px",
        radius50: "50%",
      },
      fontFamily: { montserrat: "Montserrat", gilroy: "Gilroy" },
      letterSpacing: {
        ls1: "1px",
        ls02857142984867096: "0.2857142984867096px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
