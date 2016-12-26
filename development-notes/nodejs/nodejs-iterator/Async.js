
class Async
{
  * [Symbol.iterator]() {
    let fs = require('fs')
    let out = yield fs.readFile('./sample.txt', 'utf8') // not blocking
    yield out;
  }

}

module.exports = Async;