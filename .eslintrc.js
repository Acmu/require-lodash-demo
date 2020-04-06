// const ERROR = 'error';
const WARN = 'warn';
const OFF = 'off';

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': WARN,
    'no-console': OFF,
    'no-debugger': WARN,
  },
};
