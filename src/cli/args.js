import process from 'node:process';

const parseArgs = () => {
    const args = process.argv.slice(2).reduce((acc, arg) => {
        if (arg.startsWith('--')) {
            acc.push(arg)
        } else {
            acc.splice(-1, 1, acc.at(-1) + ' is ' + arg);
        }
        return acc;
    }, []);
    for (let arg of args) {
        console.log(arg);
    }
};

parseArgs();