
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
