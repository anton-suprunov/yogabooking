module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  
  "plugins": [
    'react',
    'react-hooks'
  ],

  "extends": [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  
  "parser": 'babel-eslint',
  "parserOptions": {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },

  "rules": {
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    //'no-unused-vars': ['warn'],
    'no-unused-vars': 0,
    'no-console': 0,

    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
  },
};