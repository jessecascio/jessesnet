var cluster = require('cluster');
var os = require('os');
var exectimer = require('exectimer');
var fs = require('fs');
var proc = require('child_process');

if (cluster.isMaster) {
  var timer = new exectimer.Tick('points');
  
  var args = args();

  var size = parseInt(args.s) || 10000;
  var workers = parseInt(args.w) || 1;

  var data = fs.readFileSync(`${__dirname}/../data/mock-data-${size}.json`, 'utf-8');
  var json = JSON.parse(data);

  if (workers === 1) {
    console.log('STARTING SINGLE WORKER...');

    timer.start();
    worker(json, 0, json.length).then(function(distance) {
      timer.stop();

      console.log('DISTANCE', distance);
      console.log('TIME', exectimer.timers.points.duration()/1000000000, 's');
      process.exit();
    });
  }
  
  if (workers > 6 || workers <= 0) {
    workers = 3;
  }

  console.log(`STARTING ${workers} WORKERS...`);

  var distances = [];
  var finished = 0;

  var segment = Math.floor(json.length / workers);
  var total = 0;

  timer.start();

  var ps = [];

  for (var i=0; i<workers; i++) {
    if (i !== workers - 1) {
      ps.push(worker(json, total, total + segment ));
      total += segment;
    } else {
      ps.push(worker(json, total, json.length ));
    }
  }

  Promise.all(ps).then((data) => {
    timer.stop();
    
    console.log('DISTANCE', Math.min(...data.filter(d => d >= 0)));
    console.log('TIME', exectimer.timers.points.duration()/1000000000, 's');
  });
} 

function worker(json, start, end) {
  return new Promise ((resolve, reject) => {
    let worker = proc.fork(`${__dirname}/worker.js`);
    
    worker.on('message', (d) => {
      resolve(d);
    });

    worker.send({ points: json, start: start, end: end });

  });
}

function args() {
  var args = {};

  for (var i=2; i<process.argv.length; i=i+2) {
    args[process.argv[i].replace(/[^a-z]/gi, '')] = process.argv[i + 1];
  }

  return args;
}
