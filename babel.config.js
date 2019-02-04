module.exports = function babelConfig(api) {
  api.cache(false);
  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      'syntax-trailing-function-commas',
      '@babel/plugin-transform-runtime',
      'styled-components',
    ],
    env: {
      cjs: {
        presets: [
          ['@babel/preset-env', {
            loose: true,
            modules: 'commonjs',
          }],
        ],
      },
      'react-native': {
        presets: [
          'expo',
        ],
        plugins: [
          '@babel/plugin-transform-react-jsx-source',
        ],
      },
    },
  };
};
