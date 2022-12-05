import {createGzip} from 'node:zlib';
import {createReadStream, createWriteStream} from 'node:fs';
import {pipeline} from 'node:stream';

const compress = async () => {
    const gzip = createGzip();
    const rs = createReadStream('./src/zip/files/fileToCompress.txt');
    const ws = createWriteStream('./src/zip/files/archive.gz');

    pipeline(rs, gzip, ws, (err) => {
        if (err) throw err;
    });
};

await compress();