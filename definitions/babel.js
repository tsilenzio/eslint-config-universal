'use strict'

module.exports = {
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 6,
  },
  'env': {
    'es6': true,
  },
  'plugins': [
    'babel',
  ],
  'rules': {
    // enforce spacing around the * in generator functions
    'babel/generator-star-spacing': [2, { 'before': false, 'after': true }],
    // require a capital letter for constructors
    'babel/new-cap': [2, { 'newIsCap': true, 'capIsNew': false }],
    // enforce spacing inside array brackets
    'babel/array-bracket-spacing': [2, 'never'],
    // require or disallow padding inside curly braces
    'babel/object-curly-spacing': [2, 'always'],
    // require method and property shorthand syntax for object literals
    'babel/object-shorthand': [2, 'always'],
    // require parens in arrow function arguments
    'babel/arrow-parens': 0,
    // disallow use of await inside of a loop
    'babel/no-await-in-loop': 2,
    // disable eslint rules
    'generator-star-spacing': 0,
    'new-cap': 0,
    'array-bracket-spacing': 0,
    'object-curly-spacing': 0,
    'object-shorthand': 0,
    'arrow-parens': 0,
    // babel includes 'use strict' for us
    'strict': 0,
  },
}
