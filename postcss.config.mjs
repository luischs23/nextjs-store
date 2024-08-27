/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  import: ['global.css'],
};

export default config;
