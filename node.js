'use strict'

module.exports = {
  extends: [
    'eslint-config-universal/legacy',
    'eslint-config-universal/definitions/node',
    'eslint-config-universal/definitions/strict',
  ].map(require.resolve),
}
