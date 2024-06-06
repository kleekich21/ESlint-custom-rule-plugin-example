"use strict";

const eslintPluginExample = require("./eslint-plugin-example");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    plugins: { example: eslintPluginExmaple },
    rules: {
      "example/enforce-foo-bar": "error",
    },
  },
];
