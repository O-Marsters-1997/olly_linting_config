module.exports = {
  rules: {
    "promise/prefer-await-to-then": "error",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false,
      },
    ],
  },
};
