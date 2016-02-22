'use strict'

module.exports = {
  extends: [
    'eslint-config-universal/legacy',
    'eslint-config-universal/es2015',
    'eslint-config-universal/react',
  ].map(require.resolve),
  rules: {
    // enable class only support for react components
    'react/prefer-es6-class': [2, 'always'],
  },
}
