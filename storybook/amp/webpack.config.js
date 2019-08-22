/* eslint-disable no-param-reassign */
module.exports = async ({ config }) => {
  config.resolve.extensions = ['.amp.js', '.mjs', '.js', '.jsx', '.json'];
  return config;
};
