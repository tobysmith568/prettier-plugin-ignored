# prettier-plugin-ignored

A Prettier plugin that adds an 'ignored' language, allowing you to ignore files without listing them in a `.prettierignore` file.

<a href="https://www.npmjs.com/package/prettier-plugin-ignored">
  <img alt="npm" src="https://img.shields.io/npm/v/prettier-plugin-ignored?logo=npm">
</a>

<a href="https://app.codecov.io/gh/tobysmith568/prettier-plugin-ignored">
  <img alt="Codecov" src="https://img.shields.io/codecov/c/github/tobysmith568/prettier-plugin-ignored?logo=codecov&label=Coverage">
</a>

<a href="https://license-cop.js.org">
  <img alt="Protected by: License-Cop" src="https://license-cop.js.org/shield.svg">
</a>

## Why is this useful?

While Prettier configs can be shared across multiple repositories via npm packages, `.prettierignore` files cannot. This plugin solves that limitation by allowing you to configure which files should be ignored directly in the Prettier config. As a result, you can share ignored files across multiple repositories.

The plugin extends Prettier with a new language called 'ignored'. When Prettier encounters a file with this language, it formats it to be exactly as it was found, effectively ignoring it.

## Installation

```pwsh
npm install --save-dev prettier-plugin-ignored
```

## Usage

Add the plugin to your Prettier config and override specific files to use the 'ignored' parser.

For example, here I'm using it to always ignore `pnpm-lock.yaml` files and all Azure Pipelines.

```json
{
  "plugins": ["prettier-plugin-ignored"],

  // Other stuff

  "overrides": [
    {
      "files": ["pnpm-lock.yaml", ".azure-pipelines/*.yml"],
      "options": {
        "parser": "ignored"
      }
    }
  ]
}
```

## License

prettier-plugin-ignored is licensed under the [ISC license](./LICENSE.md).
