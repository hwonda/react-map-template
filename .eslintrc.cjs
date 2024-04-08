module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@stylistic'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'always'],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/space-infix-ops': ['error', { "int32Hint": false }],
    '@stylistic/no-multi-spaces': 'error',
    '@stylistic/comma-spacing': ['error', { 'before': false, 'after': true }],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/arrow-spacing': ['error', { 'before': true, 'after': true }]
  }
}
