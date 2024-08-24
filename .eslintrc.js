module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["**/*.config.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"],
    "@typescript-eslint/no-unused-vars": ["error"],

    "react/destructuring-assignment": ["error", "always"],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/no-array-index-key": "warn",
    "react/no-namespace": "error",
    "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
    "react/self-closing-comp": ["error", { component: true }],
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-fragments": ["error", "syntax"],
    "react/jsx-key": [
      "error",
      { checkFragmentShorthand: true, warnOnDuplicates: true },
    ],
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-leaked-render": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-pascal-case": "warn",
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: "last",
        reservedFirst: true,
      },
    ],
    "react/jsx-uses-vars": "error",
    "react/style-prop-object": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "no-unused-vars": "off",
  },
  settings: {
    react: { version: "detect" },
  },
};
