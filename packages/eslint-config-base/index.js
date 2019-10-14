module.exports = {
  parser: 'babel-eslint',
  extends: [
    './rules/unicorn',
    './rules/errors',
    './rules/variables',
    './rules/style',
    './rules/best-practices',
    './rules/node',
    './rules/es6',
    './rules/imports',
  ].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
}
