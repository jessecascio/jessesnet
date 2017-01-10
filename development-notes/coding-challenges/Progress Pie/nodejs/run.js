var file;

process.argv.forEach(function (val, index, array) {
  if (index === 2) {
    file = val;
  }
});

var fs = require('fs');
 
var contents = fs.readFileSync(file, 'utf8');
var rows = contents.split('\n');

var r = 50;
var out = [];

for (j=1; j<=parseInt(rows[0]); j++) {
  var cols = rows[j].split(' ');
  var p = cols[0];
  var x = cols[1];
  var y = cols[2];

  var a = Math.abs(50 - x);
  var b = Math.abs(50 - y);

  // first check if inside the circle
  var c = Math.sqrt(a*a + b*b);
  if (c > r) {
    out.push('Case #'+j+': white')
    continue;
  }

  // check point quads
  var d = p/100 * 360;

  var fq;
  if (d >=0 && d <= 90) {
    fq = 1;
  } else if (d > 90 && d <= 180) {
    fq = 2;
  } else if (d > 180 && d <= 270) {
    fq = 3;
  } else {
    fq = 4;
  }
  var pq;
  if (x >= 50 && y > 50) {
    pq = 1;
  } else if (x >= 50 && y <= 50) {
    pq = 2;
  } else if (x < 50 && y <= 50) {
    pq = 3;
  } else {
    pq = 4;
  }

  if (fq > pq) {
    out.push('Case #'+j+': black');
    continue;
  } else if (fq < pq) {
    out.push('Case #'+j+': white');
    continue;
  }
  
  // compare triangle angles
  var pa = p/100 * 360 % 90;
  var xya = Math.atan(x/y) * 57.2958;

  if (pa >= xya) {
    out.push('Case #'+j+': black');
  } else {
    out.push('Case #'+j+': white');
  }
}

fs.writeFile('progress_pie_output.txt', out.join('\n'), function (err) {
  console.log('DONE!');
});