/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-dotenv',
    ['@snowpack/plugin-webpack', {}],
    [
      '@snowpack/plugin-build-script',
      { cmd: 'postcss', input: ['.css'], output: ['.css'] },
    ],
  ],
  routes: [],
  optimize: {},
  packageOptions: {},
  devOptions: {},
  buildOptions: {},
};
