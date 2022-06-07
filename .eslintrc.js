export default {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'no-console': 'off',
    'no-mixed-spaces-and-tabs': 'warn',
    'no-empty': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^(_+)$',
        argsIgnorePattern: '^(_.*?|e)$',
      },
    ],
    '@typescript-eslint/no-this-alias': 'off',
    semi: ['warn', 'never'],
    quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'nonblock-statement-body-position': ['warn', 'below'],
    'space-before-function-paren': ['warn', 'never'],
    indent: ['warn', 2, {
      SwitchCase: 1,
      ignoredNodes: [
        'ConditionalExpression',
      ],
    }],
    'brace-style': ['warn', '1tbs'],
    'space-before-blocks': ['warn', 'always'],
    'keyword-spacing': 'warn',
    'jsx-a11y/accessible-emoji': 'off',
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['node_modules/*', 'dist/*'],
}
