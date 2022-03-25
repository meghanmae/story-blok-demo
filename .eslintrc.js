module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/comma-spacing': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    semi: 'off',
    '@typescript-eslint/semi': 'off',
    'brace-style': 'off',
    '@typescript-eslint/brace-style': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
    ],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['constructors'] },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    quotes: 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      { allowTemplateLiterals: true },
    ],
    'no-console': 1,
    'vue/valid-v-slot': 'off',
  },
  ignorePatterns: [
    '/**/*.g.ts',
    'webpack.config.aspnetcore-hmr.js',
    'src/types/*.d.ts',
  ],
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
