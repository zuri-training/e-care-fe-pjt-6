/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-build-script',
      { cmd: 'postcss', input: ['.css'], output: ['.css'] },
    ],
  ],
  routes: [],
  optimize: {
    splitting: true,
    treeshake: true,
    bundle: true,
    minify: true,
    target: 'es2018',
  },
  packageOptions: {},
  devOptions: {},
  buildOptions: {},
};
