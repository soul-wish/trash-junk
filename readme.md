# trash-junk [![Build Status](https://travis-ci.org/soul-wish/trash-junk.svg?branch=master)](https://travis-ci.org/soul-wish/trash-junk)

> Move system junk files to the trash (recursively)


## Install

```
$ npm install --save trash-junk
```


## Usage

```js
const trashJunk = require('trash-junk');

trashJunk(__dirname).then((files) => {
    console.log(files);
});
// => [ '.DS_Store', '__MACOSX' ]
```


## API

### trashJunk(input)

Returns a `Promise`

#### input

`input` is a directory you wish to scan


## CLI

To install the [`trash-junk`](https://github.com/soul-wish/trash-junk-cli) command, run:

```
$ npm install --global trash-junk-cli
```


## FAQ

### What are *junk* files?

```js
const junk = [
    '.DS_Store',
	'.AppleDouble',
	'.LSOverride',
	'Icon\r',
	'._test',
	'.Spotlight-V100',
	'.Spotlight-V100/Store-V2/C6DBF25D-81D4-4B57-907E-B4A555E72C90/0.directoryStoreFile',
	'.Trashes',
	'__MACOSX',
	'test~',
	'Thumbs.db',
	'ehthumbs.db',
	'Desktop.ini',
	'npm-debug.log',
	'.test.swp'
]
```

## Related

- [trash-junk-cli](https://github.com/soul-wish/trash-junk-cli) - Move system junk files to the trash (recursively)
- [junk](https://github.com/sindresorhus/junk) by Sindre Sorhus - Filter out system junk files like .DS_Store and Thumbs.db


## License

MIT © [Sergey Lysenko](http://soulwish.info)
