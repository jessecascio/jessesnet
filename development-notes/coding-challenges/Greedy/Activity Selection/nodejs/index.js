var times = [
  {start: 20, finish: 30},
  {start: 10, finish: 20},
  {start: 12, finish: 25}
];

times = [
  {start: 0, finish: 6},
  {start: 1, finish: 2},
  {start: 5, finish: 9},
  {start: 5, finish: 7},
  {start: 8, finish: 9},
  {start: 3, finish: 4}
];

times.sort((a, b) => {
  return a.finish > b.finish ? 1 : -1;
});

var c_begin, c_end;
var activities = [];

for (var i=0; i<times.length; i++) {
  if (!c_begin || times[i].start >= c_end) {
    c_begin = times[i].start;
    c_end = times[i].finish;
    activities.push(i);
  }
}

console.log('# activities:', activities.length);

for (var i=0; i<activities.length; i++) {
  console.log(`start ${times[activities[i]].start} to end ${times[activities[i]].finish}`);
}
