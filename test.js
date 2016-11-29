import fs from 'fs';
import pathExists from 'path-exists';
import test from 'ava';
import trashJunk from './';

test('Junk files should be removed', async (t) => {
    const fixtures = [
        '.DS_Store',
        '.AppleDouble',
        '._test',
        '__MACOSX',
        'test~',
        'Thumbs.db',
        'Desktop.ini',
        'npm-debug.log',
    ];

    fixtures.forEach((fix) => {
        fs.writeFileSync(fix, '');
        t.true(pathExists.sync(fix));
    });

    const junkFiles = await trashJunk(__dirname);

    t.deepEqual(junkFiles.sort(), fixtures.sort());
});
