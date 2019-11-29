[![Actions Status](https://github.com/code-quality-resources/eslint-config-typescript/workflows/CI/badge.svg)](https://github.com/code-quality-resources/eslint-config-typescript/actions?query=workflow%3A%22CI%22)
[![Dependabot](https://badgen.net/dependabot/code-quality-resources/eslint-config-typescript/224793137?icon=dependabot)](https://dependabot.com/)
[![Mergify Status](https://img.shields.io/endpoint.svg?url=https://gh.mergify.io/badges/code-quality-resources/eslint-config-typescript&style=flat)](https://mergify.io)

# Eslint Config Typescript

[**eslint**](https://github.com/eslint/eslint) shareable config to help you identify and report on patterns found in your code in [typescript](https://github.com/microsoft/TypeScript) applications.

## Plugins

This [configuration](https://github.com/code-quality-resources/eslint-config-typescript/blob/master/index.js) uses the following plugins:

- [`@code-quality/eslint-config-base`](https://github.com/code-quality-resources/eslint-config-base)
- [`@typescript-eslint/eslint-plugin`](https://github.com/typescript-eslint/typescript-eslint)

## Install

```bash
$ yarn add eslint eslint-plugin-import @code-quality/eslint-config-typescript -D
```

## Usage

The shareable config can be configured in the [**eslint** configuration file](https://eslint.org/docs/user-guide/configuring):

Create a _.eslintrc.js_ file with the following contents:

```js
module.exports = {
  extends: [
    '@code-quality/eslint-config-typescript'
  ],
}
```
