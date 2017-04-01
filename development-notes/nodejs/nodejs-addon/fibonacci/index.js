
// FIBI
var t = require('exectimer');
var Tick = t.Tick;

var tick = new Tick('cpp');

var func = require('./build/Release/addon');

tick.start();
func.calc(45);
tick.stop();

console.log('cpp', t.timers.cpp.duration()/1000000000, 'secs');

tick = new Tick('nodejs');

tick.start();
fibi(45);
tick.stop();

console.log('nodejs', t.timers.nodejs.duration()/1000000000, 'secs');

var diff = t.timers.nodejs.duration() - t.timers.cpp.duration();

console.log('% increase', diff / t.timers.nodejs.duration() * 100);

function fibi(n) {
  if (n <= 1) {
    return n;
  }

  return fibi(n - 1) + fibi(n - 2);
}

// ITERATION
/*
var t = require('exectimer');
var Tick = t.Tick;

var tick = new Tick('cpp');

var func = require('./build/Release/addon');

tick.start();
func.iteration();
tick.stop();

console.log('cpp', t.timers.cpp.duration(), 'nanoseconds');

tick = new Tick('nodejs');

tick.start();
for (var i=0; i<5000000000; i++) { }
tick.stop();

console.log('nodejs', t.timers.nodejs.duration(), 'nanoseconds');

var diff = t.timers.nodejs.duration() - t.timers.cpp.duration();

console.log('% increase', diff / t.timers.nodejs.duration() * 100);
*/
