/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-mobile": "url('./src/assets/banerMobile.jpg')",
        "banner-desktop": "url('./src/assets/bannerDesktop.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1FA0A5",
          secondary: "#2AAB28",
          accent: "#25A667",
          neutral: "#1B1B1B",
          "primary-content": "#EEF4CA",
          "base-100": "#1D1D27",
          "base-200": "#262626",
          "base-300": "#737373",
          "base-content": "#EEF4CA",
          info: "#009EDD",
          "info-content": "#EEF4CA",
          success: "#83AA0B",
          "succes-content": "#EEF4CA",
          warning: "#FCAD02",
          "warning-content": "#1B1B1B",
          error: "#D8343F",
          "error-content": "#EEF4CA",
        },
      },
    ],
  },
};
