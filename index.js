'use strict';

const fs = require('fs');
const imageDownload = require('image-download');
const imageType = require('image-type');
const makeDir = require('make-dir');
const path = require('path');
const saveBuffer = require('save-buffer');
const wallpaper = require('wallpaper');

const defaults = {
    dir: path.join(__dirname, '.wallpaper'),
    width: 1920,
    height: 1080,
};

module.exports = async(options) => {
    options = Object.assign({}, defaults, options);

    const url = `https://picsum.photos/${options.width}/${options.height}/?random`;
    const buffer = await imageDownload(url);
    const type = imageType(buffer);
    const imagePath = path.join(options.dir, 'random.' + type.ext);

    await saveBuffer(buffer, imagePath);
    await wallpaper.set(imagePath, { scale: options.scale });
};