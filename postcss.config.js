const webComponentName = require('path').basename(__dirname)
const selectorPrefix = `.${webComponentName}_`

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-css-variables'),
    require('postcss-calc'),
    require('postcss-url')({
      url: (asset) => {
        if (asset.url === 'assets/sprite.png') {
          return '/node_modules/pilatch-card/assets/sprite.png'
        }
      }
    }),
  ],
}
