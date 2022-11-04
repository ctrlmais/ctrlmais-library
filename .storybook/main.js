module.exports = {
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    {
      name: '@storybook/addon-docs', // new addon for docs
      options: {
          configureJSX: true,
          babelOptions: {},
          sourceLoaderOptions: null
      }
  }
  ],
  framework: '@storybook/react',
};