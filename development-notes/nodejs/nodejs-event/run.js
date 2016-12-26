
// https://www.npmjs.com/package/setimmediate

/*
  for (var i=0; i<5000000000; i++) { }

  process.nextTick (function (){          
    emitter.emit('poot', {foo:'baz'});
  });
*/

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