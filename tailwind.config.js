module.exports = {
  purge: ['./src/**/*.jsx', './src/**/*.js'],
  theme: {
    colors: {
      // configure color pallete here
      transparent: 'transparent',
      current: 'currentColor',
    },
  },
  variants: {},

  plugins: [],
  corePlugins: {
    fontFamily: false,
    // preflight: false,
  },
};
