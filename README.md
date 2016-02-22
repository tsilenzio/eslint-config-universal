# eslint-config-universal

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html)


## Install

```bash
$ npm install --save-dev eslint-config-universal
```

When using the `babel` version you'll also need Babel's ESLint [parser](https://github.com/babel/babel-eslint) and [plugin](https://github.com/babel/eslint-plugin-babel):

```bash
$ npm install --save-dev babel-eslint eslint-plugin-babel
```

When using the `react` version you'll also need the React ESLint [plugin](https://github.com/yannickcr/eslint-plugin-react):

```bash
$ npm install --save-dev eslint-plugin-react
```


## Usage

### Universal

To get started, simply add [`universal`](index.js) to `.eslintrc`. It has rules for [vanilla javascript](#legacy), [the browser](#browser), [node.js](#node), [react](#react) and [ES2015](#es2015)

```json
{
    "extends": "universal"
}
```

### <a name="legacy"></a>Legacy

[`universal/legacy`](legacy.js) has an environment independent set of rules with support for [ECMAScript 5](http://www.ecma-international.org/ecma-262/5.1/)

```json
{
    "extends": "universal/legacy"
}
```

### <a name="es2015"></a>ES2015

[`universal/es2015`](es2015.js) starts where [`universal/legacy`](#legacy) left off and adds rules for [ECMAScript 2015](http://www.ecma-international.org/ecma-262/6.0/)

```json
{
    "extends": "universal/es2015"
}
```

### <a name="browser"></a>Browser

[`universal/browser`](browser.js) uses [`universal/legacy`](#legacy) and adds support for the browser

```json
{
    "extends": "universal/browser"
}
```

### <a name="node"></a>Node

[`universal/node`](node.js) uses [`universal/legacy`](#legacy) and adds with support for node.js

```json
{
    "extends": "universal/node"
}
```

### <a name="react"></a>React / JSX

[`universal/react`](react.js) mixes [`universal/browser`](#browser) and [`universal/node`](#node), enables JSX support and configures the react plugin

```json
{
    "extends": "universal/react"
}
```

### <a name="babel"></a>Babel

[`universal/babel`](babel.js) builds upon [`universal/es2015`](#es2015) by enabling the rules from [`eslint-plugin-babel`](https://github.com/babel/eslint-plugin-babel) and sets the lint parser to [`babel-eslint`](https://github.com/babel/babel-eslint)

```json
{
    "extends": "universal/babel"
}
```

### Mix &amp; Match
You can also mix and match different configurations

Universal with Babel support
```json
{
    "extends": [
        "universal",
        "universal/babel"
    ]
}
```

Node.js and Browser support
```json
{
    "extends": [
        "universal/node",
        "universal/browser"
    ]
}
```

_**Note:** We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint._

## License

MIT © [Taylor Silenzio](http://tsilenz.io)
