
let proc = require('child_process');
let cluster = require('cluster');

// let worker2 = proc.fork(__dirname+"/worker.js");
// worker1.send('additional..');

console.log('PROCS:', require('os').cpus().length);

function doWork() {
  return new Promise ((resolve, reject) => {
    Promise.all([
      worker(1),
      worker(2),
      worker(3),
      worker(4),
      worker(5),
      worker(6),
      worker(7)
    ]).then((data) => {
      resolve(data);
    })
  });
}

function worker(i) {
  return new Promise ((resolve, reject) => {
    let worker = proc.fork(__dirname+"/promise-worker.js");
    worker.on('message', (d) => {
      resolve(d);
    });
  });
}

function workerless(i) {
  return new Promise ((resolve, reject) => {
    var iteration = 5000000000;
    for (var i=0; i<iteration; i++) { }
    console.log('math...');
    resolve(78);
  });
}

async function main() {
  let data = await doWork();
  console.log('waited...', data);
}

console.log('starting...');
main();
