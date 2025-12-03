module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#001d4a",
        "primary-light": "#d9eef7",
        accent: "#013eb9",
        "accent-alt": "#d3bc60",
        "accent-dark": "#a98b30",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        title: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
