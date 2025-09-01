const { FlatCompat } = require("@eslint/eslintrc");
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const unicornPlugin = require("eslint-plugin-unicorn");
const importPlugin = require("eslint-plugin-import");

const compat = new FlatCompat();

module.exports = tseslint.config(
  {
    ignores: ["node_modules"],
  },
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      ...compat.extends("plugin:unicorn/recommended"),
    ],
    plugins: {
      unicorn: unicornPlugin,
      import: importPlugin,
    },
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "@angular-eslint/use-lifecycle-interface": "error",
      "@angular-eslint/use-component-view-encapsulation": "error",
      "@angular-eslint/prefer-on-push-component-change-detection": "warn",
      "@typescript-eslint/explicit-member-accessibility": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          alphabetize: {
            order: "asc",
          },
          "newlines-between": "always",
        },
      ],
      "unicorn/prefer-top-level-await": "off",
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      "@angular-eslint/template/prefer-ngsrc": "error",
    },
  },
);
