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

  if (workers > os.cpus().length - 1 || workers <= 0) {
    workers = os.cpus().length - 1;
  }

  console.log(`STARTING ${workers} WORKERS...`);

  var distances = [];
  var finished = 0;

  var segment = Math.ceil(json.length / workers);
  var total = 0;

  timer.start();

  var ps = [];

  for (var i=0; i<workers; i++) {
    var end = total + segment > json.length ? json.length : total + segment;
    ps.push(worker(json, total, end));
    total += segment;
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
