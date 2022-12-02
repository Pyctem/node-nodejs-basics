import {readFile} from 'node:fs/promises'

const read = async () => {
    try {
        const contents = await readFile('src/fs/files/fileToRead.txt');
        console.log(contents.toString());
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await read();