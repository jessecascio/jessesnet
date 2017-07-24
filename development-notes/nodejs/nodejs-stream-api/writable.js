
let Writable = require('stream').Writable;

class WStream extends Writable {
  _write(chunk, encoding, cb) {
    console.log('Received data:', chunk.toString());
    cb();
  }
}

function work() {
  return new Promise((resolve, reject) => {
    let i = new WStream();

    i.write('hello');
    i.write('world');

    i.end(() => {
      return resolve();
    });
  });
}

work().then(d => {
  console.log('wrote');
});

/*
if(!i.write) {            
  console.log('Backpressure');
  return i.once('drain', generateMore);
}
*/