/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rblack: ["Roboto-Black", "sans-serif"],
        rblackitalic: ["Roboto-BlackItalic", "sans-serif"],
        rbold: ["Roboto-Bold", "sans-serif"],
        rbolditalic: ["Roboto-BoldItalic", "sans-serif"],
        ritalic: ["Roboto-Italic", "sans-serif"],
        rlight: ["Roboto-Light", "sans-serif"],
        rlightitalic: ["Roboto-LightItalic", "sans-serif"],
        rmedium: ["Roboto-Medium", "sans-serif"],
        rmediumitalic: ["Roboto-MediumItalic", "sans-serif"],
        rregular: ["Roboto-Regular", "sans-serif"],
        rthin: ["Roboto-Thin", "sans-serif"],
        rthinitalic: ["Roboto-ThinItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
}
