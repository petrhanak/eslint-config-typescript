const base = require('@code-quality/eslint-config-base')

module.exports = {
  extends: require.resolve('@code-quality/eslint-config-base'),
  settings: {
    'import/resolver': {
      node: {
        ...base.settings['import/resolver'].node,
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
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  env: {
    es6: true,
  },
  rules: {
    'valid-jsdoc': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
  },
}
