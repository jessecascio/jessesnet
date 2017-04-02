import fs from 'fs';
import os from 'os';
import proc from 'child_process';

export default class Master {

  static start(size, workers) {
    
    // hack for runing from src / dist (should be conf'd)
    let data;
    try {
      data = fs.readFileSync(`${__dirname}/../../../data/mock-data-${size}.json`, 'utf-8');
    } catch (e) {
      data = fs.readFileSync(`${__dirname}/../../data/mock-data-${size}.json`, 'utf-8');
    }

    const json = JSON.parse(data);
    
    if (workers > os.cpus().length - 1 || workers <= 0) {
      workers = os.cpus().length - 1;
    }

    const segment = Math.ceil(json.length / workers);
    let total = 0;

    let ps = [];

    for (let i=0; i<workers; i++) {
      var end = total + segment > json.length ? json.length : total + segment;
      ps.push(Master.worker(json, total, end));
      total += segment;
    }

    return Promise.all(ps);
  }

  static worker(points, start, end) {
    return new Promise ((resolve, reject) => {
      let worker = proc.fork(__dirname+"/Worker.js");
      
      worker.on('message', (d) => {
        resolve(d);
      });

      worker.send({ points: points, start: start, end: end });
    });
  }
}
