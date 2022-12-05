import {createGunzip} from 'node:zlib';
import {createReadStream, createWriteStream} from 'node:fs'

const decompress = async () => {
    createReadStream('./src/zip/files/archive.gz')
        .pipe(createGunzip())
        .pipe(createWriteStream('./src/zip/files/fileToCompress1.txt'));
};

await decompress();