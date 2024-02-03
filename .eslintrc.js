module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    semi: ['error', 'never'],
    'react/jsx-no-bind': 'off',
    'arrow-body-style': 'off',
    'comma-dangle': ['error', 'never'],
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-unused-vars': 'off',
    'object-curly-newline': 'off',
    'max-len': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-shadow': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'no-console': ['warn', { allow: ['clear', 'info', 'error', 'dir', 'trace', 'log'] }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: ['function-expression', 'arrow-function']
      }
    ],
    'react/jsx-one-expression-per-line': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
