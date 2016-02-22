'use strict'

module.exports = {
  extends: [
    'eslint-config-universal/definitions/best-practices',
    'eslint-config-universal/definitions/errors',
    'eslint-config-universal/definitions/style',
    'eslint-config-universal/definitions/variables',
  ].map(require.resolve),
}
