module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    './rules/unicorn',
    './rules/errors',
    './rules/variables',
    './rules/style',
    './rules/best-practices',
    './rules/node',
    './rules/es6',
    './rules/imports',
    'eslint-config-prettier',
  ].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
    requireConfigFile: false,
  },
}
