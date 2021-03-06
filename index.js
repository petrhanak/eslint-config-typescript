const base = require('@code-quality/eslint-config-base')

module.exports = {
  extends: require.resolve('@code-quality/eslint-config-base'),
  settings: {
    'import/resolver': {
      node: {
        ...base.settings['import/resolver'].node,
        extensions: [
          ...base.settings['import/resolver'].node.extensions,
          '.ts',
          '.tsx',
          '.d.ts',
        ],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    // TODO: Remove this property in the future
    createDefaultProgram: true
  },
  plugins: [
    '@typescript-eslint',
  ],
  env: {
    es6: true,
  },
  rules: {

    //
    // Does Not Work Well With Eslint
    //

    'valid-jsdoc': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',

    //
    // General rules
    //

    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['error', {
      default: 'array',
      readonly: 'array',
    }],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-ignore': 'warn',
    '@typescript-eslint/brace-style': 'error',
    '@typescript-eslint/camelcase': 'warn',
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/generic-type-naming': [2, '^T[A-Z][a-zA-Z]+$'],
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
      },
      singleline: {
        delimiter: 'semi',
      },
    }],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-extra-non-null-assertion': 'warn',
    '@typescript-eslint/no-extra-parens': 0,
    '@typescript-eslint/no-extraneous-class': 0,
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 0,
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-magic-numbers': 0,
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion': 1,
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/no-require-imports': 1,
    '@typescript-eslint/no-this-alias': ['error', {
      allowDestructuring: true,
    }],
    '@typescript-eslint/no-type-alias': 0,
    '@typescript-eslint/no-unnecessary-condition': 0,
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-untyped-public-signature': 0,
    '@typescript-eslint/no-use-before-define': ['error', {
      functions: false,
      classes: false,
      typedefs: false,
    }],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-for-of': 0,
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/promise-function-async': 0,
    '@typescript-eslint/quotes': ['error', 'single', 'avoid-escape'],
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/triple-slash-reference': 1,
    '@typescript-eslint/typedef': 0,
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unbound-method': 0,
    '@typescript-eslint/unified-signatures': 'error',

    //
    // Eslint Plugin unused Imports
    //

    '@typescript-eslint/no-unused-vars': 0,

    'unused-imports/no-unused-imports': 0,
    'unused-imports/no-unused-imports-ts': 2,

    'unused-imports/no-unused-vars': 0,
    'unused-imports/no-unused-vars-ts': 2,
  },
}
