import Master from './src/Master';
import exectimer from 'exectimer';

(async function(){
  const timer = new exectimer.Tick('points');
  const args = (() => {
    const args = {};

    for (var i=process.argv.length % 2 === 0 ? 2 : 3; i<process.argv.length; i=i+2) {
      args[process.argv[i].replace(/[^a-z]/gi, '')] = process.argv[i + 1];
    }

    return args;
  })();

  const size = parseInt(args.s) || 1000;
  const workers = parseInt(args.w) || 1;

  console.log(`STARTING ${workers} WORKERS, ${size} POINTS...`);

  timer.start();
  const data = await Master.start(size, workers);
  timer.stop();
   
  console.log('DISTANCE', Math.min(...data.filter(d => d >= 0)));
  console.log('TIME', exectimer.timers.points.duration()/1000000000, 's');
})();
