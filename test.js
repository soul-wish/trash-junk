import fs from 'fs';
const path = require('path');
import pathExists from 'path-exists';
import tempfile from 'tempfile';
import test from 'ava';
import trashJunk from './';

const tmpdir = tempfile();
fs.mkdirSync(tmpdir);
process.chdir(tmpdir);

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

    const junkFiles = await trashJunk(tmpdir);
    const junkFilesWithPath = junkFiles.map(file => file.replace('/private', ''));
    const fixturesWithPath = fixtures.map(file => path.resolve(tmpdir, file));
    console.log(fixturesWithPath);

    t.deepEqual(junkFilesWithPath.sort(), fixturesWithPath.sort());
});
