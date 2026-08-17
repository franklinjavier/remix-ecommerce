import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import { flatConfigs as importX } from 'eslint-plugin-import-x'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import { config as defineConfig, configs as tseslint } from 'typescript-eslint'

export default defineConfig(
  {
    ignores: ['build/', '.react-router/', 'coverage/', 'node_modules/', 'public/'],
  },
  js.configs.recommended,
  ...tseslint.recommended,
  reactHooks.configs.flat.recommended,
  importX.recommended,
  importX.typescript,
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    plugins: {
      react,
    },
    settings: {
      react: {
        version: '19.2.8',
      },
      'import-x/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      'import-x/default': 'error',
      'import-x/export': 'error',
      'import-x/named': 'error',
      'import-x/namespace': 'error',
      'import-x/no-unresolved': ['error', { commonjs: true, amd: true }],
      'import-x/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
          groups: ['builtin', 'external', ['parent', 'index', 'sibling', 'internal'], 'type', 'object'],
          pathGroups: [
            {
              pattern: '~/**',
              group: 'internal',
            },
          ],
        },
      ],
      'react/jsx-sort-props': ['error', { shorthandLast: true, callbacksLast: true, ignoreCase: true }],
      'sort-imports': ['error', { ignoreDeclarationSort: true }],
    },
  },
)
