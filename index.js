const readDir = require('fs-readdir-recursive');
const path = require('path');
const junk = require('junk');
const trash = require('trash');

module.exports = (input) => {
    const junkFiles = [];

    if (!input) {
        throw new Error('You must specify directory.');
    }
    readDir(input, x => x).forEach((file) => {
        if (junk.is(file)) {
            junkFiles.push(path.resolve(__dirname, input, file));
        }
    });
    return new Promise((resolve) => {
        trash(junkFiles).then(() => {
            resolve(junkFiles);
        });
    });
};
