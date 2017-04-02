import Algorithm from './Algorithm';

export default class Worker {
  constructor() {
    process.on('message', (message) => {
      process.send({ distance: Algorithm.brute(message.points, message.start, message.end) });
      process.exit();
    });
  }
}