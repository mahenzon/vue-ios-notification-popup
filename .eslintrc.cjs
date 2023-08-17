/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    "object-curly-spacing": ["error", "always"],
    semi: ['error', 'never'],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
  }
}
