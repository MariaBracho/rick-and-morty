module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: "@typescript-eslint/parser",
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "standard-with-typescript",
    "prettier"
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json", "./vite.config.ts"]
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off"
  }
};
