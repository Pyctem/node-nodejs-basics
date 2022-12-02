import {mkdir, readdir, copyFile} from 'node:fs/promises';

const copy = async () => {
    try {
        const content = await readdir('src/fs/files/');
        await mkdir('src/fs/files_copy/');
        content.forEach(fileName => copyFile('src/fs/files/' + fileName, 'src/fs/files_copy/' + fileName))
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await copy();