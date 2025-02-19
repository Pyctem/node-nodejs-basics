import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {release, version} from 'node:os';
import {createServer as createServerHttp} from 'node:http';
import './files/c.js';

const a = JSON.parse(
    await readFile('./src/modules/files/a.json')
);
const b = JSON.parse(
    await readFile('./src/modules/files/b.json')
);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = a;
} else {
    unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${path.dirname(fileURLToPath(import.meta.url))}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});


export {unknownObject, myServer}

