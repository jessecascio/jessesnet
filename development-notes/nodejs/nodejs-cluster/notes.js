import cluster from 'cluster';
import os from 'os';

/**
 * same script
 */

if (cluster.isMaster) {
  cluster.fork();
  console.log('live...');

  cluster.on('message', (m) => {
    console.log('contact', m);
  });
  
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  process.send('im alivveeee');
  process.exit();
}

if (cluster.isMaster) {
  const data = fs.readFileSync(__dirname + '/mock-data.json', 'utf-8');
  const json = JSON.parse(data);

  const worker = cluster.fork();
  
  worker.on('message', function(message) {
    console.log('from worker', message);
  });
  
  worker.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });

  worker.send({ chat: 'Ok worker, Master got the message! Over and out!' });

} else {
  process.on('message', function(message) {
    console.log('message form master', message);
    process.send({ chat: 'Hey master, I got a new request!' });
  });
}