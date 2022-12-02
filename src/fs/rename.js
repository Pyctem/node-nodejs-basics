import {rm, readFile, writeFile} from 'node:fs/promises'

const rename = async () => {
    try {
        const contents = await readFile('src/fs/files/wrongFilename.txt');
        await writeFile('src/fs/files/properFilename.dd', contents, {flag: 'wx'});
        await rm('src/fs/files/wrongFilename.txt');
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await rename();