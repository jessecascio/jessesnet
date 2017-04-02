
var random = [], unique = [];
var t = 10000;

for (var i=0; i<t; i++) {
  var x = Math.round(Math.random() * t) * (Math.round(Math.random() * 3) + 1);
  var y = Math.round(Math.random() * t) * (Math.round(Math.random() * 8) + 1);
  random.push({x, y});
}

require('fs').writeFileSync(__dirname + `/mock-data-${t}.json`, JSON.stringify(random));

console.log('data generated');