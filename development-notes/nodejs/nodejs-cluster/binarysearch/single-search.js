import cluster from 'cluster';
import os from 'os';
import exectimer from 'exectimer';
import BinarySearch from './BinarySearch';
import fs from 'fs';

const data = fs.readFileSync(__dirname + '/mock-data.json', 'utf-8');
const json = JSON.parse(data);

let timer = new exectimer.Tick('bs');

timer.start();
const index = search(261022, json);
timer.stop();

console.log('bs', exectimer.timers.bs.duration()/1000, 'micro s');
console.log('index', index);

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
