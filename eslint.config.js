import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginAstro from 'eslint-plugin-astro';
import * as astroParser from 'astro-eslint-parser';
import tseslint from 'typescript-eslint';

export default [
  eslintPluginPrettierRecommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
      },
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['**/*.js', '**/*.mjs', '**/*.ts', '**/*.tsx', '**/*.astro'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'none',
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    ignores: [
      'dist/',
      'node_modules/',
      '.astro/',
      '.wrangler/',
      '.od-skills/',
      'playwright-report/',
      'test-results/',
      'coverage/',
    ],
  },
];
