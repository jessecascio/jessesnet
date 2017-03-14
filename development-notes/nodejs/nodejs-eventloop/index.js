/**
 * EXAPMLE 1 - the execution stack
 */

/*
function one() {
  two();
  const f = 'one';
  console.log(`inside function ${f}`);
}

function two() {
  const f = 'two';
  console.log(`inside function ${f}`);
}

const f = 'init';
one();
console.log(`exectued succesfully with ${f} preserved`);
*/

/**
 * EXAPMLE 2 - push execution to event loop, show single threaded
 */

/*
setTimeout(() => {
  console.log('executing second large task...');
  for (var i=0; i<5000000000; i++) { }
  console.log('finished second large task...');
}, 0);

setTimeout(() => {
  console.log('executing third large task...');
  for (var i=0; i<5000000000; i++) { }
  console.log('finished third large task...');
}, 0);

console.log('executing first large task...');
for (var i=0; i<5000000000; i++) { }
console.log('finished first large task...');
*/

/**
 * EXAPMLE 3 - cpu bound blocking
 */
/*
setInterval(function() {
  console.log('io bound work completed')
}, 200);

cpubound();
cpubound();

function cpubound() {
  console.log('executing cpu bound task...');
  for (var i=0; i<5000000000; i++) { }
  console.log('finished cpu bound task...');
}
*/

/**
 * EXAPMLE 4 - cpu bound non blocking
 */

/*
function cpubound() {
  let i = 0;
  let max = 5000000000;
  let batch = 500000000;

  console.log('starting cpu bound');
  
  var loop = setInterval(() => {

    if (i >= max) {
      console.log('cpu bound done');
      clearInterval(loop);
      return;
    }

    for( var j = i; j < i + batch; j++ ) { }
    console.log('cpu iteration done');

    i += batch;
  }, 0);
  
}
 
cpubound();

setInterval(function() {
  console.log('io bound work completed')
}, 800);
*/

/**
 * EXAMPLE - Blocked server
 */

/*
const http = require('http')  

const requestHandler = (request, response) => {  
  if (request.url === '/block') {
    cpu();
  }
  response.end('Response Sent!\n')
}

// wrapping in a Promise still blocks (w/ && w/o the setTimeout call)
function cpu() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (var i=0; i<5000000000; i++) { }
      console.log('cpu bound task completed...')
      resolve();
    }, 0);
  });
}

const server = http.createServer(requestHandler)
server.listen(3000, (err) => {  
  console.log('server is listening on 3000')
});
*/

/**
 * EXAPMLE 5 - blocking events
 */

/*
let events = require('events');
let emitter = new events.EventEmitter();

emitter.on('cpubound', (data) => {
  console.log('cpubound starting....', data);
  cpubound();
});

emitter.on('iobound', (data) => {
  console.log('iobound starting....', data);
  iobound();
});

emitter.emit('cpubound', {foo:'baz'});
emitter.emit('iobound', {foo:'baz'});

console.log('finished script flow...');

function cpubound() {
  for (var i=0; i<5000000000; i++) { }
  console.log('cpu bound work completed')
}

function iobound() {
  setTimeout(function() {
    console.log('io bound work completed')
  }, 0);
}
*/

/**
 * EXAPMLE 6 -pushing to message queue with a promise
 */


// only beni to asyn await is ease of reading, cpu bound work loads still block the thread

cpubound().then(d => {
  console.log('cpu bound task completed...');
});

console.log('global context finished...');

function cpuqueued() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (var i=0; i<5000000000; i++) { }
      console.log('cpu bound task completed...')
      resolve();
    }, 0);
  });
}

// wrapping something in promise does not push to queue, will block !!!

// cpu bound task completed...
// global context finished...

function cpubound() {
  return new Promise((resolve, reject) => {
    for (var i=0; i<5000000000; i++) { }
    resolve();
  });
}


/**
 * EXAPMLE 7 - using async wraps return in a promise
 */

/*
// global context fini
// output whooter
iotask().then(d => {
  console.log(`output ${d}`);
});

console.log('global context fini');

async function iotask() {
  return 'whooter';
}
*/

/*
 * NOTES
 */

/*
let events = require('events');
let emitter = new events.EventEmitter();

function cpubound() {
  let i = 0;
  let max = 5000000000;
  let batch = 500000000;

  console.log('starting cpu bound');
  
  var loop = setInterval(() => {

    if (i >= max) {
      console.log('cpu bound done');
      clearInterval(loop);
      emitter.emit('finished');
      return;
    }

    for( var j = i; j < i + batch; j++ ) { }

    console.log('cpu iteration done');

    i += batch;
  }, 0);
  
}
 
cpubound();

let io = setInterval(function() {
  console.log('io bound work completed')
}, 800);

emitter.on('finished', (data) => {
  console.log('work done....');
  clearInterval(io);
});
*/

/*

*/

/*
var j = 0;

setInterval(function() {
  console.log('io input')
  for (var i=0; i<5000000000; i++) { }

  j++;

  if (j > 1) {
    clearInterval(this);
    console.log('done');
    return;
  }

  console.log('processed')
  
}, 100);

console.log('working..');

for (var i=0; i<5000000000; i++) { }

console.log('working2..');

for (var i=0; i<5000000000; i++) { }
*/

/*
var async = require('async');

async.parallel([
    function(callback) {
      console.log('starting 1');
      for (var i=0; i<5000000000; i++) { }
      return callback(null, 1);
    },
    function(callback) {
      console.log('starting 2');
      for (var i=0; i<5000000000; i++) { }
      return callback(null, 2);
    }
],
// optional callback
function(err, results) {
    console.log(results);
});
*/

// https://www.npmjs.com/package/setimmediate

/*
var work1 = setInterval(function(){
  clearInterval(work1);
}, 1000);
*/

/*
setInterval(function(){
  console.log('io task');
}, 500);

console.log('it begins ...');

function housework() {
  console.log('I call it house work');
  for (var i=0; i<5000000000; i++) { }
  console.log('Cause its life work');
}

process.nextTick(housework);
*/

/*
console.log('starting');

for (var i=0; i<2; i++) { 

  work();
  
  console.log('iter')
}

function work() {
  console.log('house work')
  for (var j=0; j<5000000000; j++) { 
    process.nextTick(work);

  }
}

setInterval(function(){
  console.log('io task');
}, 500);
*/

/*
  for (var i=0; i<5000000000; i++) { }

  process.nextTick (function (){          
    emitter.emit('poot', {foo:'baz'});
  });
*/

/*

/*
let events  = require('events');
let emitter = new events.EventEmitter();

// multiple
emitter.on('poot', (data) => {
  console.log('pootin....', data);
  // blocks
  slow();
});

emitter.emit('poot', {foo:'baz'});
emitter.emit('poot', {foo:'baz'});

// single
emitter.once('foop', (data) => {
  console.log('foopin....', data);
});

emitter.emit('foop', {foo:'baz'});
emitter.emit('foop', {foo:'baz'});

console.log(emitter.listenerCount('poot'));
console.log(emitter.listenerCount('foop'));

function slow() {
  for (var i=0; i<5000000000; i++) { }
}
*/
