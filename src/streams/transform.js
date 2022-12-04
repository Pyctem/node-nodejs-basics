import { stdin, stdout } from 'node:process'

const transform = async () => {
    stdin.on('data', (chunk) => {
        stdout.write([...chunk.toString()].reverse().join('') + '\n')
    })
};

await transform();