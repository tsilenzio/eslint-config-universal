'use strict'

const expect = require('chai').expect
const eslint = require('eslint')
const dedent = require('dedent')

function isObject (o) {
  const getProto = Object.getPrototypeOf
  const isObj = toString.call(o) === '[object Object]'

  return isObj && getProto(o) === null || getProto(o) === getProto({})
}

function isArray (a) {
  return toString.call(a) === '[object Array]'
}

const base = {
  extends: isArray,
  env: isObject,
  rules: isObject,
}

function validateConf (conf) {
  for (const prop in base) {
    if (conf.hasOwnProperty(prop)) {
      expect(base[prop](conf[prop])).to.be.true
    }
  }
}

function validateError (errors, rules) {
  expect(errors.length).to.equal(rules.length)

  rules.forEach(function (rule, index) {
    expect(errors[index].ruleId).to.equal(rule)
  })
}

function lint (code, conf) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: conf,
  })

  return linter.executeOnText(code).results[0].messages
}

describe('Validate', function () {
  describe('the legacy config', function () {
    const conf = 'legacy.js'

    it('should be valid', function () {
      validateConf(require(`../${conf}`))
    })

    it('should only throw two errors', function () {
      const rules = ['no-console', 'no-undef']
      const code = dedent `
        console.log('javascript')\n`

      validateError(lint(code, conf), rules)
    })
  })

  describe('the node config', function () {
    const conf = 'node.js'

    it('should be valid', function () {
      validateConf(require(`../${conf}`))
    })

    it('should only throw two errors', function () {
      const rules = ['strict', 'no-console']
      const code = dedent `
        console.log('javascript')\n`

      validateError(lint(code, conf), rules)
    })
  })

  describe('the browser config', function () {
    const conf = 'browser.js'

    it('should be valid', function () {
      validateConf(require(`../${conf}`))
    })

    it('should only throw two errors', function () {
      const rules = ['strict', 'no-undef']
      const code = dedent `
        (function () {
          process.exit(0)
        })()\n`

      validateError(lint(code, conf), rules)
    })
  })

  describe('the es2015 config', function () {
    const conf = 'es2015.js'

    it('should be valid', function () {
      validateConf(require(`../${conf}`))
    })

    it('should only throw two errors', function () {
      const rules = ['no-unused-vars', 'no-empty-function']
      const code = dedent `
        class Foo {
          bar () {}
        }\n`

      validateError(lint(code, conf), rules)
    })
  })

  describe('the react config', function () {
    const conf = 'react.js'

    it('should be valid', function () {
      validateConf(require(`../${conf}`))
    })

    it('should only throw two errors', function () {
      const rules = ['react/display-name', 'react/sort-comp']
      const code = dedent `
        'use strict'

        var React = require('react')

        React.createClass({
          render: function () {
            return <div></div>
          },
          doSomething: function () {
            this.setState({})
          },
        })\n`

      validateError(lint(code, conf), rules)
    })
  })

  describe('the default config', function () {
    const conf = 'index.js'

    it('should be valid', function () {
      validateConf(require(`../${conf}`))
    })

    it('should only throw two errors', function () {
      const rules = ['strict', 'no-console']
      const code = dedent `
        console.log('hello world')
        \n`

      validateError(lint(code, conf), rules)
    })
  })

  describe('the babel config', function () {
    const conf = 'babel.js'

    it('should be valid', function () {
      validateConf(require(`../${conf}`))
    })

    it('should only throw two errors', function () {
      const rules = ['no-unused-vars', 'no-empty-function']
      const code = dedent `
        class Foo {
          bar () {}
        }\n`

      validateError(lint(code, conf), rules)
    })
  })
})
