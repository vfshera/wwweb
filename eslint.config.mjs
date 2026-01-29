import stylistic from "@stylistic/eslint-plugin";
import teslintParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import globals from "globals";
import teslint from "typescript-eslint";

export default defineConfig([
  {
    ignores: ["node_modules/", ".react-router", "!**/.server", "!**/.client", "!**/server"],
  },
  teslint.configs.recommended,
  {
    files: ["**/*.{jsx,tsx,js,ts}"],
    ...reactPlugin.configs.flat.recommended,
    plugins: {
      "react-hooks": reactHooks,
      "@stylistic": stylistic,
    },
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
      parser: teslintParser,
      parserOptions: {
        ...reactPlugin.configs.flat.recommended.languageOptions.parserOptions,
        ecmaVersion: "latest",
        sourceType: "module",
        tsconfigRootDir: import.meta.dirname,
      },
    },

    settings: {
      react: {
        version: "detect",
      },
      formComponents: ["Form"],
      linkComponents: [
        { name: "Link", linkAttribute: "to" },
        { name: "NavLink", linkAttribute: "to" },
      ],
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/prop-types": "off",
      "no-console": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "all",
          ignoreRestSiblings: false,
          argsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/consistent-type-imports": "warn",
      "@stylistic/quotes": ["warn", "double"],
      "@stylistic/semi": ["warn", "always"],
      "@stylistic/padding-line-between-statements": [
        "warn",
        { blankLine: "always", prev: "*", next: ["return", "export"] },
        {
          blankLine: "always",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var", "function", "type", "class", "block-like"],
        },
        {
          blankLine: "always",
          prev: "function",
          next: ["const", "let", "var", "function", "type", "class", "block-like"],
        },
        {
          blankLine: "always",
          prev: ["type", "class", "block-like"],
          next: ["const", "let", "var", "function", "type", "class", "block-like"],
        },
      ],
    },
  },
  eslintConfigPrettier,
]);
