import {createReadStream} from 'node:fs';
import process from 'node:process';

const read = async () => {
    const rs = createReadStream('./src/streams/files/fileToRead.txt');
    rs.pipe(process.stdout);
};

await read();