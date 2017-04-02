import fs from 'fs';
import proc from 'child_process';

export default class Master {

  static start(size, workers) {
    
    const data = fs.readFileSync(`${__dirname}/../mock-data-${size}.json`, 'utf-8');
    const json = JSON.parse(data);
    
    const segment = Math.floor(json.length / workers);
    let total = 0;

    let ps = [];

    for (let i=0; i<workers; i++) {
      if (i !== workers - 1) {
        ps.push(Master.worker(json, total, total + segment));
        total += segment;
      } else {
        ps.push(Master.worker(json, total, json.length));
      }
    }

    return Promise.all(ps);
  }

  static worker(points, start, end) {
    return new Promise ((resolve, reject) => {
      let worker = proc.fork(__dirname+"/worker-small.js");
      
      worker.on('message', (d) => {
        resolve(d);
      });

      worker.send({ points: points, start: start, end: end });
    });
  }
}
