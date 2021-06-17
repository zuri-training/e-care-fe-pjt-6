// module.exports = {
//   plugins: [require('tailwindcss'), require('autoprefixer')],
// };
const tailwindPlugin = require('tailwindcss');
const autoPrefixerPlugin = require('autoprefixer');

module.exports = {
  plugins: [tailwindPlugin, autoPrefixerPlugin],
};
