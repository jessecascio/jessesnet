
var random = [], unique = [];

for (var i=0, t=500000; i<t; i++) {
  random.push(Math.round(Math.random() * t))
}
for (var i=0; i<random.length; i++) {
  if (unique.indexOf(random[i]) === -1 && random[i] !== 0) {
    unique.push(random[i]);
  }
}

unique.sort((a, b) => {
  return a > b ? 1 : -1;
});

require('fs').writeFileSync(__dirname + '/mock-data.json', JSON.stringify(unique));

console.log('data generated');