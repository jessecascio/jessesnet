
import ProcessManger from './Manager';

import Manager from './Manager';
import exectimer from 'exectimer';
import cluster from 'cluster';

import Algorithm from './Algorithm';

const timer = new exectimer.Tick('points');
const args = {};

const manager = new Manager();

manager.process(cluster, args.s, args.w).then((d) => {
  console.log('d', d);
});

 



/*
function args() {
  var args = {};

  for (var i=2; i<process.argv.length; i=i+2) {
    args[process.argv[i].replace(/[^a-z]/gi, '')] = process.argv[i + 1];
  }

  return args;
}
*/

process.exit();

if (cluster.isMaster) {
 
  

  var size = parseInt(args.s) || 10000;
  var workers = parseInt(args.w) || 1;

  var data = fs.readFileSync(`${__dirname}/mock-data-${size}.json`, 'utf-8');
  var json = JSON.parse(data);

  if (workers === 1) {
    console.log('STARTING SINGLE WORKER...');

    timer.start();
    var distance = brute(json, 0, json.length);
    timer.stop();

    console.log('DISTANCE', distance);
    console.log('TIME', exectimer.timers.points.duration()/1000000000, 's');
    process.exit();
  }
  
  if (workers > 6 || workers <= 0) {
    workers = 3;
  }

  console.log(`STARTING ${workers} WORKERS...`);

  var distances = [];
  var finished = 0;

  cluster.on('message', function(worker, message) {
    distances.push(message.distance);
  });
  cluster.on('exit', function (worker, code, signal) {
    finished++;

    if (finished === workers) {
      timer.stop();

      console.log('DISTANCE', Math.min(...distances));
      console.log('TIME', exectimer.timers.points.duration()/1000000000, 's');
      process.exit();
    }

  });

  var segment = Math.floor(json.length / workers);
  var total = 0;

  timer.start();

  for (var i=0; i<workers; i++) {
    if (i !== workers - 1) {
      cluster.fork().send({ points: json, start: total, end: total + segment });
      total += segment;
    } else {
      cluster.fork().send({ points: json, start: total, end: json.length });
    }
  }
} else {
  process.on('message', function(message) {
    process.send({ distance: brute(message.points, message.start, message.end) });
    process.exit();
  });
}



