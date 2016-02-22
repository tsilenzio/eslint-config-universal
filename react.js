'use strict'

module.exports = {
  extends: [
    'eslint-config-universal/legacy',
    'eslint-config-universal/node',
    'eslint-config-universal/browser',
    'eslint-config-universal/definitions/react',
    'eslint-config-universal/definitions/strict',
  ].map(require.resolve),
}
