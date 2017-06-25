<div align="center">
<h1>
  @weh/markdown
</h1>

<p>
  A Markdown parsing plugin for the <a href="https://github.com/wehjs/weh">weh static site generator</a>
</p>

<p>
  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index"><img src="https://img.shields.io/badge/stability-stable-green.svg?style=flat-square"
  alt="API stability"></a>
  <!-- code coverage -->
  <a href="https://codecov.io/gh/wehjs/markdown"><img src="https://img.shields.io/codecov/c/github/wehjs/markdown.svg?style=flat-square"
  alt="code coverage"></a>
  <!-- travis ci -->
  <a href="https://travis-ci.org/wehjs/markdown"><img src="https://img.shields.io/travis/wehjs/markdown.svg?style=flat-square"
  alt="test status"></a>
  <!-- code style -->
  <a href="https://github.com/feross/standard"><img src="https://img.shields.io/badge/code%20style-standard-blue.svg?style=flat-square"
  alt="code style: standard"></a>
</p>
</div>

## Features

- **Parse Markdown content** in text files within the [weh](https://github.com/wehjs/weh) `files` array
- **Custom filter functions** to include or exclude files from transforms

## Installation

```sh
npm install --save @weh/markdown
```

## Default example

```js
const weh = require('@weh/weh')
const markdown = require('@weh/markdown')

// enter our main function:
// the main function should be an async function so that
// it automatically returns a promise
weh(async site => {
  // we register our plugin...
  site.use(markdown)
  // ...and initiate the build process
  return site
})
```

## Filter example

You can pass a custom filter as an option to `markdown` to include or exclude files.

A filter is a function that takes the arguments `file`, `options`, and `files`. `file` is the current file, `options` is the options object passed to `markdown`, and `files` is the entire array of files created by `weh`.

If the filter function returns `true`, `markdown` applies its transforms to the contents of the current `file` object. Otherwise the `file` object remains unchanged.

The default filter in `markdown` returns true only for files ending with `.md`:

```js
function myCustomFilter (file, options, files) {
  return file.path.endsWith('.md')
}
```

This is how you could use a filter to apply `markdown` to every file:

```js
const weh = require('@weh/weh')
const markdown = require('@weh/markdown')

// custom filter function
// always returns true
function myCustomFilter (file, options, files) {
  return true
}

weh(async site => {
  // we register the markdown plugin with our custom filter function...
  site.use(markdown, {filter: myCustomFilter})
  // ...and initiate the build process
  return site
})
```

## Code of Conduct

This repository operates under the [`weallbehave`](https://github.com/wealljs/weallbehave) Code of Conduct. Its contents can be found in [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

## License

MIT (see [LICENSE](LICENSE) document)
