
let proc = require('child_process');

// let worker2 = proc.fork(__dirname+"/worker.js");
// worker1.send('additional..');

function doWork() {
  return new Promise ((resolve, reject) => {
    Promise.all([worker(1),worker(2),worker(3),worker(4),worker(5)]).then((data) => {
      resolve(data);
    })
  });
}

function worker(i) {
  return new Promise ((resolve, reject) => {
    let worker = proc.fork(__dirname+"/worker.js");
    worker.on('message', (d) => {
      resolve(d);
    });
  });
}

async function main() {
  let data = await doWork();
  console.log('waited...', data);
}

console.log('starting...');
main();

/**
 *
 */
/*

let iteration = 5000000000;

async function work() {
  for (let i=0; i<iteration; i++) {

  }
  console.log('math...');
}

let process = require('child_process');

process.fork(__dirname+"/worker.js");
process.fork(__dirname+"/worker.js");

console.log('done');
*/

// require('os').cpus().length;

/**
 * 1
 */
// work();
// console.log('done...');

/**
 *
 */
// setTimeout(work, 0);
// console.log('done...');

/**
 *
 */
// setTimeout(work, 0);
// setTimeout(work, 0);
// console.log('done...');

/**
 *
 */
/*
let async = require('async')

let q = async.queue(function (callback) {
  callback();
}, 5);

q.push(work); // still singled
q.push(work);

console.log('done...');
*/

