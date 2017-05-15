
let Readable = require('stream').Readable;

class RStream extends Readable {

  constructor() {
    // { encoding: 'utf-8', objectMode: false, highWaterMark: 16}
    super({objectMode: true});
  }

  _read(size) {
    // internal reader buffer, requires encoding since a String vs Buffer
    // if push returns false than the highWaterMark is hit
    
    this.push({ struct: 'data' });
    
    // this.push(null);

    /*
    var stream = require('fs').createReadStream('./file.txt')
    .on('open', function () {

      stream
        .pipe(require('crypto').createCipher('aes192', 'shhhh-secret'))
        .pipe(response);
    });
     */
  }
}

let i = new RStream();
i.on('readable', () => {
  let chunk;
  while((chunk = i.read()) !== null) {
    // chunk.toString() for string stream
    console.log("Chunk received: " + chunk.struct);
  }
});
i.on('end', () => {
  console.log('se la vi');
})