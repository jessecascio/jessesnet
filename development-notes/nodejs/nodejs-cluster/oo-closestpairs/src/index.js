import Manager from './Manager';
import exectimer from 'exectimer';

const timer = new exectimer.Tick('points');
const args = getArgs();

doWork();

async function doWork() {

  console.log(`STARTING ${args.w} WORKERS, ${args.s || 10000} POINTS...`);

  timer.start();

  const manager = new Manager();
  const data = await manager.process(args.s, args.w);
  
  timer.stop();
   
  console.log('DISTANCE', Math.min(...data.filter(d => d >= 0)));
  console.log('TIME', exectimer.timers.points.duration()/1000000000, 's');
}

function getArgs() {
  var args = {};

  for (var i=process.argv.length % 2 === 0 ? 2 : 3; i<process.argv.length; i=i+2) {
    args[process.argv[i].replace(/[^a-z]/gi, '')] = process.argv[i + 1];
  }

  return args;
}