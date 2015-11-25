# es6-bundled-and-transpiled

### overview & purpose 

Personal folder and configuration template for an ES6 source (possibly consisting of multiple files) being bundled, transpiled to ES5 and eventually minified.

### contents

| File or folder | Purpose |
| -------------- | ------- |
| `dist` | Output destination of transpilation and bundleing process (a minificated ES5 file). |
| `source` | Sources directory, contains the parts as separate ES6 files. |
| `test` | Not a unit test, just a simple `html`, including and using the `dist/bundle.js` |
| `.eslintrc` | Linter configuration, could be a bit more detailed. |
| `.gitignore` | Files and folders to be ignore by Git. |
| `README.md` | This file. |
| `package.json` | This project package's properties and dependencies |
| `webpack.config.js` | Configuration file for the transpiling, bundling and minification step. |

### usage info

Clone the repo:

```bash
git clone git@github.com:ta2edchimp/es6-bundled-and-transpiled.git
```

Install dependencies:

```bash
npm install
```

Make a build (will also lint the source code):
```bash
npm run build
```

Alter the contents of `webpack.config.js` to reflect the desired output result. For example

```JavaScript
  entry: './source/entry.js',
  output: {
    filename: './dist/bundle.js',
    libraryTarget: 'assign',
    library: 'MainNamespace'
  },
```

Will result in a global object `MainNamespace` to be available on including `dist/bundle.js` via `script` tag; in it the `source/entry.js` exports will be available.
