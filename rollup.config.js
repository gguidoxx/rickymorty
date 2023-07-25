const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('@rollup/plugin-babel');
const postcss = require('rollup-plugin-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  input: 'src/App.jsx',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: ['node_modules/**', 'postcss.config.js'],
      presets: ['@babel/preset-react'],
    }),
    postcss({
      plugins: [
        tailwindcss,
        autoprefixer
      ],
      extract: true,
    }),
  ],
};
