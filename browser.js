'use strict'

module.exports = {
  extends: [
    'eslint-config-universal/legacy',
    'eslint-config-universal/definitions/browser',
    'eslint-config-universal/definitions/strict',
  ].map(require.resolve),
}
