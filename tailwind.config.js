module.exports = {
  purge: ['./src/**/*.jsx', './src/**/*.js'],
  theme: {
    colors: {
      // configure color pallete here
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  variants: {},

  plugins: [],
  corePlugins: {
    fontFamily: false,
    // preflight: false,
  },
};
