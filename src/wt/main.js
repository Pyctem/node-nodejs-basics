import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
    const allCpus = cpus();
    const promises = [];
    let data = 10;

    for(let cpu of allCpus) {
        const worker = new Worker('./src/wt/worker.js');
        const promise = new Promise((res) => {
            worker.postMessage(data++);
            worker.once('message', result => {
                res({ status: 'resolved', value: result });
            })
        });

        promises.push(promise);
    };

    Promise.all(promises).then(result => console.log(result))
};

await performCalculations();