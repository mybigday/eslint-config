module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['unicorn'],
  rules: {
    // https://github.com/sindresorhus/eslint-plugin-unicorn#rules
    'unicorn/error-message': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/import-index': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/regex-shorthand': 'error',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/prevent-abbreviations': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/throw-new-error': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/expiring-todo-comments': 'error',
    'unicorn/no-keyword-prefix': 'error',
  },
}
