# ![cat-pad](header.png)


## Install

```
$ npm install --save cat-pad
```


## Usage

```js
const catPad = require('cat-pad');

catPad('Meow', 6);
//=> '🐈🐈Meow'
```


## API

### catPad(input, length)

Pads `input` with cats on the left side if it's shorter than `length`. Padding cats are truncated if they exceed `length`.

#### input

Type: `string`

String to pad.

#### length

Type: `number`<br>
Default: `0`

Padding length.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
