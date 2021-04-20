module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: [
      ['module-resolver', {
        alias: {
          '@providers': './src/providers',
          '@functions': './src/functions',
          '@middlewares': './src/middlewares',
          '@utils': './src/utils',
          '@services': './src/services',
          '@controllers': './src/controllers'
        }
      }]
    ]
  }
