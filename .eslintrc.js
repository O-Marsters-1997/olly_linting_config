module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "./rules/best-practices.js",
    "./rules/disabled-rules.js",
    "./rules/functions.js",
    "./rules/promises.js",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "promise", "prefer-arrow"],
};
