module.exports = {
  extends: [
    '@fugood/eslint-config-base',
    './rules/react',
    './rules/jsx-a11y',
    'prettier/react',
  ].map(require.resolve),
  rules: {},
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/core-modules': ['react', 'react-native'],
  },
  rules: {
    strict: 'error',
    // disallow use of console
    'no-console': 'warn',
  },
}
