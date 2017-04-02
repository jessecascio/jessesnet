
var random = [], unique = [];
var t = 1000000;

for (var i=0; i<t; i++) {
  var x = Math.round(Math.random() * t);
  var y = Math.round(Math.random() * t);
  random.push({x, y});
}

require('fs').writeFileSync(__dirname + `/mock-data-${t}.json`, JSON.stringify(random));

console.log('data generated');