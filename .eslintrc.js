/** @type {import('eslint').Linter.Config} */
export default {
  extends: ['@remix-run/eslint-config', '@remix-run/eslint-config/node', 'prettier'],
  rules: {
    'import/default': 'error',
    'import/export': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-unresolved': ['error', { commonjs: true, amd: true }],
    'import/order': [
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
}
