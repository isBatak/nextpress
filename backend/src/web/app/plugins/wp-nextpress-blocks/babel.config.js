module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/react',
    '@babel/preset-typescript',
  ];

  const plugins = [
    'emotion',
    [
      '@babel/proposal-class-properties',
      {
        loose: true,
      },
    ],
    '@babel/proposal-object-rest-spread',
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragma: 'wp.element.createElement',
      },
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: false,
        regenerator: true,
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
