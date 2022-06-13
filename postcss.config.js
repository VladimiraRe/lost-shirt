/*
  autoprefixer - https://github.com/postcss/autoprefixer
  cssnano - https://cssnano.co/docs/getting-started/
*/

module.exports = {
    plugins: [
      require('autoprefixer'),
      require('cssnano')({
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true
            }
          }
        ]
      })
    ]
  }