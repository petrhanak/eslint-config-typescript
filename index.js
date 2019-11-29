const base = require('@code-quality/eslint-config-base')

module.exports = {
  extends: require.resolve('@code-quality/eslint-config-base'),
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.ts',
          '.tsx',
          '.d.ts',
          ...base.settings['import/resolver'].node.extensions,
        ],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  env: {
    es6: true,
  },
  rules: {},
}
