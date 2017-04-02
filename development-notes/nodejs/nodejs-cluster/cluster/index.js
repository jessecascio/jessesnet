var cluster = require('cluster');
var os = require('os');
var exectimer = require('exectimer');
var fs = require('fs');

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

  var segment = Math.ceil(json.length / workers);
  var total = 0;

  timer.start();

  for (var i=0; i<workers; i++) {
    var end = total + segment > json.length ? json.length : total + segment;
    cluster.fork().send({ points: json, start: total, end: end });
    total += segment;
  }
} else {
  process.on('message', function(message) {
    process.send({ distance: brute(message.points, message.start, message.end) });
    process.exit();
  });
}

function brute(points, start, end) {
  var min = -1;

  for (var i=start; i<end; i++) {
    for (var j=0; j<points.length; j++) {
      if (i === j) {
        continue;
      }

      var x = points[i].x - points[j].x;
      var y = points[i].y - points[j].y;

      var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  
      if (min === -1 || dist < min) {
        min = dist;
      }
    }
  }

  return min;
}

function args() {
  var args = {};

  for (var i=2; i<process.argv.length; i=i+2) {
    args[process.argv[i].replace(/[^a-z]/gi, '')] = process.argv[i + 1];
  }

  return args;
}