import cluster from 'cluster';
import os from 'os';
import exectimer from 'exectimer';
import BinarySearch from './BinarySearch';
import fs from 'fs';

if (cluster.isMaster) {
  const data = fs.readFileSync(__dirname + '/mock-data.json', 'utf-8');
  const json = JSON.parse(data);

  const worker1 = cluster.fork();
  const worker2 = cluster.fork();

  const indices = [];
  const workers = [];

  cluster.on('message', function(worker, message) {
    indices.push(message.index);
    workers.push(worker.process.pid);
  });
  cluster.on('exit', (worker, code, signal) => {
    const windex = workers.indexOf(worker.process.pid);
    workers.splice(index, 1);

    if (workers.length) {
      return;
    }

    let index = -1;

    if (indices[0] !== -1 || indices[1] !== -1) {
      if (indices[0] !== -1) {
        index = indices[0] + mid;
      } else {
        index = indices[1] + mid;
      }
    }
    
    timer.stop();

    console.log('bs', exectimer.timers.bs.duration()/1000, 'micro s');
    console.log('index', index);
    
    process.exit();
  });

  const mid = Math.floor(json.length / 2);
  let timer = new exectimer.Tick('bs');

  timer.start();
  
  worker1.send({ value: 261022, data: json.slice(0, mid)});
  worker2.send({ value: 261022, data: json.slice(mid)});

} else {
  process.on('message', function(message) {
    process.send({ index: search(message.value, message.data) });
    process.exit();
  });
}

function search(value, data) {
  if (!data.length) {
    return -1;
  }

  let left = 0;
  let right = data.length;

  while (right !== left) {
    let i = Math.floor((right + left) / 2);

    if (value === data[i]) {
      return i;
    }
    if (i === 0 || i === data.length) {
      return value === data[i] ? i : -1;
    }

    if (data[i] > value) {
      right = i;
    } else {
      left = i + 1;
    }
  }

  return -1;
}

/*

let timer = new exectimer.Tick('bs');

timer.start();
const index = search(261022, json, 0, json.length);
timer.stop();

console.log('bs', exectimer.timers.bs.duration()/1000, 'micro s');
console.log(index);

function search(value, data, start, end) {
  if (!data.length) {
    return -1;
  }

  let left = start;
  let right = end;

  while (right !== left) {
    console.log('right', right);
    console.log('left', left);

    let i = Math.floor((right + left) / 2);

    if (value === data[i]) {
      return i;
    }
    if (i === 0 || i === data.length) {
      return value === data[i] ? i : -1;
    }

    if (data[i] > value) {
      right = i;
    } else {
      left = i + 1;
    }
  }

  return -1;
}

process.exit();


*/

