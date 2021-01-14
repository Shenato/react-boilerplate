const prettier = require('./prettier.config.js');

module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  plugins: ['prettier', 'react-hooks'],

  env: {
    node: true,
    es6: true,
    browser: true,
  },

  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,

    sourceType: 'module',
  },

  globals: {
    localStorage: true,
  },

  rules: {
    'array-callback-return': ['off'],
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],
    'no-console': ['error', { allow: ['warn', 'error', 'info', 'table'] }],
    'prettier/prettier': ['error', prettier],
    'react/prop-types': ['off'],
    'react/state-in-constructor': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/destructuring-assignment': ['off'],
    'react/no-access-state-in-setstate': ['off'],
    'react/sort-comp': ['off'],
    'import/no-cycle': ['off'],
    'import/prefer-default-export': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/control-has-associated-label': ['off'],
    'jsx-a11y/label-has-associated-control': ['off'],
    'import/extensions': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['Assets', './app/assets'],
          ['Components', './app/components'],
          ['Containers', './app/containers'],
          ['Pages', './app/pages'],
          ['Public', './app/public'],
          ['Services', './app/services'],
          ['Store', './app/store'],
          ['Styles', './app/styles'],
          ['Utils', './app/utils'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.test.js', '*.spec.js'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ],
};
