import react from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser";

export default [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["server/**/*.{js,ts,jsx,tsx}", "app/src/**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: { window: "readonly" },
    },
    plugins: { react },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
    settings: { react: { version: "detect" } },
  },
];
