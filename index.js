'use strict';

const fs = require('fs');
const imageDownload = require('image-download');
const imageType = require('image-type');
const path = require('path');
const wallpaper = require('wallpaper');

const defaults = {
    dir: './',
    width: 1920,
    height: 1080
};

module.exports = async(options) => {
    options = Object.assign({}, defaults, options);

    const url = `https://picsum.photos/${options.width}/${options.height}/?random`;
    const buffer = await imageDownload(url);
    const type = imageType(buffer);
    const imagePath = path.join(options.dir, 'random.' + type.ext);console.log(imagePath)
    
    fs.writeFile(imagePath, buffer, (err) => {
        if (err) {
            throw new Error(err);
        }
    });

    await wallpaper.set(imagePath, options.scale);
};