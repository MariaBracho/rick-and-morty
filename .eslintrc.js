module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],

  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json", "./vite.config.ts"],
  },
  plugins: ["react", "@typescript-eslint"],
  root: true,
  rules: { "react/react-in-jsx-scope": "off" },
  settings: {
    react: {
      version: "detect",
    },
  },
};
