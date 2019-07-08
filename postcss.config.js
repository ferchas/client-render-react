const config = (ctx) => ({
  parser: ctx.parser ? 'sugarss' : false,
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env'),
    require('postcss-smart-import'),
    require('precss'),
    require('autoprefixer')
  ]
});


module.exports = config;
