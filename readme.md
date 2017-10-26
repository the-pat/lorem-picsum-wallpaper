# lorem-picsum-wallpaper

> Lorem Ipsum... but for wallpapers

## Install

```
npm install --save lorem-picsum-wallpaper
```

## Usage

```js
const loremPicsum = require('lorem-picsum-wallpaper');
const path = require('path');

const options = {
    width: 1920,
    height: 1080
};

loremPicsum(options).then(() => console.log('done!'));
```

## API

### loremPicsum(options)

Returns a `Promise`.

#### options

Type: `object`

##### dir

Type: `string`

Default: `'./'`

##### width

Type: `int`

Default: `1920`

##### height

Type: `int`

Default: `1080`

## Related

- [image-download](https://github.com/the-pat/image-download)
- [wallpaper](https://github.com/sindresorhus/wallpaper)

## License

MIT © [Patrick Tone](https://patrickt.one)