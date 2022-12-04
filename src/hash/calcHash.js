import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'

const calculateHash = async () => {
    try {
        const content = await readFile('./src/hash/files/fileToCalculateHashFor.txt');
        const hash = createHash('sha256').update(content).digest('hex');
        console.log(hash);
    } catch(e) {
        throw e;
    }
    
};

await calculateHash();