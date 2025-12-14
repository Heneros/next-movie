import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

import tsEslintParser from "@typescript-eslint/parser";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
export default defineConfig(
    [
        {
            ignores: [
                "node_modules/**",
                ".next/**",
                "out/**",
                "build/**",
                "dist/**",
                "*.config.js",
                "*.config.mjs",
                "*.config.ts",
            ],
        },
        {
            files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
            plugins: { js },
            extends: ["js/recommended"],
        },
        {
            files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
            languageOptions: { globals: globals.browser },
        },
        tseslint.configs.recommended,
        //   pluginReact.configs.flat.recommended,
    ],

    {
        plugins: {
            "@typescript-eslint": tsEslintPlugin,
            prettier: prettierPlugin,
        },

        rules: {
            "prettier/prettier": 0,
            "@typescript-eslint/interface-name-prefix": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unused-vars": "warn",
            "prefer-const": "warn",
        },
    },
);
