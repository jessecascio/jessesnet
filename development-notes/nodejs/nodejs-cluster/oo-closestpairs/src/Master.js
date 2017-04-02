import fs from 'fs';

export default class Master {

  static start(cluster, size, workers) {
    
      let distances = [];
      let finished = 0;

        cluster.on('message', function(worker, message) {
          distances.push(message.distance);
          console.log(distances);
          console.log('message')
        });
        cluster.on('exit', function (worker, code, signal) {
          finished++;
          console.log('done')
          return resolve();
        });

        const data = fs.readFileSync(`${__dirname}/../mock-data-${size}.json`, 'utf-8');
        const json = JSON.parse(data);

        const segment = Math.floor(json.length / workers);
        let total = 0;

        let ps = [];

        for (let i=0; i<workers; i++) {
          if (i !== workers - 1) {
            ps.push(Master.worker({ points: json, start: total, end: total + segment }));
            total += segment;
          } else {
            ps.push(Master.worker({ points: json, start: total, end: json.length }));
          }
        }

        return Promise.all(ps);
  }

  static worker(points, start, end) {
    return new Promise ((resolve, reject) => {
      let worker = cluster.fork(__dirname+"/worker-small.js").send({ points: json, start: total, end: json.length });
      worker.on('message', (d) => {
        resolve(d);
      });
    });
  }
}
