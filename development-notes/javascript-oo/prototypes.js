
function Person()
{

}

var p  = new Person();
var p2 = new Person;

function Dog(name)
{
	this.name = name;
}

var scrappy = new Dog("Scrappy");
var willis  = new Dog; // undefined

function Cat(name)
{
	Object.defineProperty(this, "name", {
		get: function() {
			return name;
		},
		set: function(rename) {
			name = rename;
		},
		enumerable: true,
		configurable: true
	});

	this.getSound = function()
	{
		return "meow";
	}
}

var harry  = new Cat("Harry");
var truman = Cat("Truman"); // points to global this, unexpected results

// innefficient as each Cat object contains this code, when it all does the same thing
console.log(harry.getSound());

/*
	prototype is the "recipe" for objects
	shared among all instances
	how functions like toString are shared among all javascript objects
	when an object is instantied the prototype for that object is assigned during construction
*/
function Bunny()
{
	this.sound = "Bhhhh"
}

Bunny.prototype.getSound = function () {
	return this.sound;
}

// cuts down code size, allows for dynamic object manipulation for all objects
var b1 = new Bunny();
var b2 = new Bunny();

console.log(b1.getSound());
console.log(b2.getSound());

// typcical to just use prototype
function Horse() {} // must define first, allows for constructor params

Horse.prototype = {
	constructor: Horse,
	sound: "Mhhhhh",
	getSound: function () {
		return this.sound;
	}
}

var ed = new Horse();
console.log(ed.getSound());

// since prototypes stored in pointers in instances, any changes are immediate to all
// prototypes are not stopped by seal or frozen, etc.

// all built in functions have prototypes as well
Array.prototype.sum = function () {
	return this.reduce(function(previous, current) { // research .reduce()
		return previous + current;
	})
};

// not recommended in production code
var arr = [2,4124,12,4,14,124];
console.log(arr.sum());

