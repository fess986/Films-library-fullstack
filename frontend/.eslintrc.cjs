module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // встроенные модули
          ['external'], // внешние библиотеки
          'internal', // внутренние модули
          ['sibling', 'parent'], // соседние и родительские модули
          ['index', // индексные файлы
          'object'], // объекты
        ],
        'newlines-between': 'always', // требовать пустую строку между группами
        alphabetize: { order: 'asc', caseInsensitive: true }, // сортировка по алфавиту
      },
    ],
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 'off',
  },
  settings: {
    react: {
      version: 'detect', // автоматически определять версию React
    },
  },
}

// начальные установки
// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react-hooks/recommended',
//   ],
//   ignorePatterns: ['dist', '.eslintrc.cjs'],
//   parser: '@typescript-eslint/parser',
//   plugins: ['react-refresh'],
//   rules: {
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//   },
// }

