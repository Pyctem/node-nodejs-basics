import {rm} from 'node:fs/promises'

const remove = async () => {
    try {
        await rm('src/fs/files/fileToRemove.txt');
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await remove();