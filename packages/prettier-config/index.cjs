/** @type {import("prettier").Config} */
module.exports = {
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  printWidth: 120,
  arrowParens: 'always',
  endOfLine: 'lf',
  overrides: [
    {
      files: '*',
      excludedFiles: ['dist/**', 'build/**', 'coverage/**', 'node_modules/**'],
    },
  ],
};
