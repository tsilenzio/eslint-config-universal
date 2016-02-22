'use strict'

module.exports = {
  extends: [
    'eslint-config-universal/es2015',
    'eslint-config-universal/definitions/babel',
  ].map(require.resolve),
}
