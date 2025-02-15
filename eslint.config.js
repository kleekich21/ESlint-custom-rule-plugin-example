"use strict";

const eslintPluginExample = require("eslint-custom-rule-plugin-example");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    plugins: { example: eslintPluginExample },
    rules: {
      "example/enforce-foo-bar": "error",
    },
  },
];
