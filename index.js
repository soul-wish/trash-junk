const readDir = require('fs-readdir-recursive');
const junk = require('junk');
const trash = require('trash');

module.exports = (input) => {
    const junkFiles = [];

    if (!input) {
        throw new Error('You must specify directory.');
    }
    readDir(input, x => x).forEach((file) => {
        if (junk.is(file)) {
            junkFiles.push(file);
        }
    });
    return new Promise((resolve) => {
        trash(junkFiles).then(() => {
            resolve(junkFiles);
        });
    });
};
