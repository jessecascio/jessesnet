
require('babel/register')({
    optional: ['bluebirdCoroutines']
});

// mock a api call
var Person = require('./src/services/Person.js');

var bob = new Person('bob');
console.log(bob.getName());

var lisa = new Person('lisa');
console.log(lisa.getName());

console.log(typeof lisa);
