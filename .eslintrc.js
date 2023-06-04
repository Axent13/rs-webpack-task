module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    indent: ["off", 2],
    semi: [2, "always"],
    "space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never" },
    ],
    "comma-dangle": ["off"],
    "no-unused-vars": ["warn"],
  },
};
