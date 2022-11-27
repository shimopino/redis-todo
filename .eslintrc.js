/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "neverthrow"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "neverthrow/must-use-result": "error",
  },
};
