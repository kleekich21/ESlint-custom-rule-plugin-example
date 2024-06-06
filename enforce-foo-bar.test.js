const { RuleTester } = require("eslint");
const fooBarRule = require("./enforce-foo-bar");

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2015 },
});

ruleTester.run("enfore-foo-bar", fooBarRule, {
  valid: [
    {
      code: "const foo = 'bar';",
    },
  ],
  invalid: [
    {
      code: "const foo = 'baz';",
      output: 'const foo = "bar";',
      errors: 1,
    },
  ],
});

console.log("All tests passed!");
