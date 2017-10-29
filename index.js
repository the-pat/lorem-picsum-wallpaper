'use strict';

const fs = require('fs');
const imageDownload = require('image-download');
const imageType = require('image-type');
const path = require('path');
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
    
    const err = await new Promise((resolve, reject) => fs.writeFile(imagePath, buffer, (err) => {
        if (err) {
            return reject(err);
        }

        return resolve();
    }));

    if (err) {
        throw new Error(err);
    }

    await wallpaper.set(imagePath, { scale: options.scale });
};