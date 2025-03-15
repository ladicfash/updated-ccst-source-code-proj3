import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { configs as tsConfigs } from '@typescript-eslint/eslint-plugin';
import { defineConfig } from 'eslint-define-config';

export default defineConfig([
  {
    ignores: ['dist'],
  },
  {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
    ],
    files: ['**/*.{ts,tsx}'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    env: {
      browser: true,
      es2021: true,
    },
    globals: globals.browser,
    plugins: ['react-hooks', 'react-refresh', '@typescript-eslint'],
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]);