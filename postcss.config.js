module.exports = {
  plugins: [
    require('postcss-custom-properties')(),
    require('postcss-import')(),
    require('autoprefixer')(),
    require('postcss-single-charset')(),
  ]
};
