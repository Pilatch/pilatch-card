let postcss = require('@stencil/postcss').postcss

exports.config = {
  bundles: [
    {components: ['pilatch-card']},
  ],
  outputTargets: [
    {type: 'dist'}
  ],
  plugins: [
    postcss({
      plugins: [
        require('postcss-import'),
        require('postcss-css-variables'),
        require('postcss-calc'),
        require('postcss-url')({
          url: (asset) => {
            if (asset.url === 'assets/sprite.png') {
              return 'https://pilatch.com/sites/default/files/pilatch-card/sprite.png'
            }
          }
        }),
      ]
    })
  ],
  namespace: 'pilatch-card',
}
