import {spawn} from 'node:child_process';
import process from 'node:process';

const spawnChildProcess = async (args = []) => {
    const cp = spawn('node', ['./script.js', ...args], {cwd: './src/cp/files'});
    process.stdin.pipe(cp.stdin);
    cp.stdout.pipe(process.stdout);
};

spawnChildProcess();