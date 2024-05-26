module.exports = {
  rules: {
    "no-console": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_$", varsIgnorePattern: "^_$" },
    ],
    "no-void": [
      "error",
      {
        allowAsStatement: true,
      },
    ],

    // Typescript
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "typeProperty",
        format: ["camelCase", "PascalCase", "UPPER_CASE", "snake_case"],
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array",
      },
    ],
  },
};
