'use strict'

module.exports = {
  extends: [
    'eslint-config-universal/legacy',
    'eslint-config-universal/definitions/es2015',
    'eslint-config-universal/definitions/strict',
  ].map(require.resolve),
}
