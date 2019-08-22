/* eslint-disable no-param-reassign */
module.exports = async ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@storybook/react': '@storybook/react-native',
  };
  return config;
};
