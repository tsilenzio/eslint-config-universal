'use strict'

module.exports = {
  'env': {
    'node': true,
  },
  'rules': {
    // enforce return after a callback
    'callback-return': 0,
    // enforce require() on top-level module scope
    'global-require': 0,
    // enforce error handling in callbacks
    'handle-callback-err': [2, '^(err|error)$'],
    // disallow mixing regular variable and require declarations
    'no-mixed-requires': 0,
    // disallow use of new operator with the require function
    'no-new-require': 2,
    // disallow string concatenation with __dirname and __filename
    'no-path-concat': 2,
    // disallow process.exit()
    'no-process-exit': 0,
    // restrict usage of specified node imports
    'no-restricted-imports': [2, 'domain', 'freelist', 'smalloc', 'sys'],
    // restrict usage of specified node modules
    'no-restricted-modules': [2, 'domain', 'freelist', 'smalloc', 'sys'],
    // disallow use of synchronous methods
    'no-sync': 0,
  },
}
