
require('babel/register')({
    optional: ['bluebirdCoroutines', 'es7.classProperties']
});

var Arrow  = require('./src/Arrow.js');
var Generator  = require('./src/Generator.js');
var Person = require('./src/services/Person.js');

var arrow = new Arrow();
//arrow.init();
// arrow.demo();

//
var abs = new Generator();

for (var i of abs.multiple()) {
	console.log(i);
}

abs.nombre = "alvin";

console.log(abs.nombre);

// need to do something else here
/*
console.log(abs.multitude().next());
console.log(abs.multitude().next());
console.log(abs.multitude().next());
console.log(abs.multitude().next());
console.log(abs.multitude().next());
*/