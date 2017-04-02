import Algorithm from './Algorithm';

process.on('message', (message) => {
  process.send(Algorithm.brute(message.points, message.start, message.end));
  process.exit();
});