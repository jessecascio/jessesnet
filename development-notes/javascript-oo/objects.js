
// when checking if property exists use "in"
var obj = {
	name: 0 // if (obj.name) == false
};

console.log("name" in obj);

// differentiate between inherited properties
console.log("toString" in obj);
console.log(obj.hasOwnProperty("toString")); 

delete obj.name;
console.log("name" in obj);

// can iterate
obj.name  = "john";
obj.phone = "4802384829";
obj.call = function() {
	console.log("hello john");
}

// prints string representation of function
for (var p in obj) {
	console.log("Property: " + p);
	console.log("Value: " + obj[p]);
}

// grab all properties, includes function name, ignores prototype properties
var ps = Object.keys(obj);
console.log(ps);

// getters and setters
var person = {
	_name: "jeff",

	get name() {
		console.log("getting name");
		return this._name;
	},

	set name(name) {
		console.log("setting name");
		this._name = name;
	}
};

console.log(person._name); // not truly private

person.name = "fred";      // this will hit setter
console.log(person.name);  // this will hit getter

Object.defineProperty(person, "name", {
	enumerable: false,    // dont include in enumeration
	configurable: false,  // dont allow deletion
	writable: false,
	value: "zach"         // default value (needed when not writable)

	// could add getter and setters here instead
});

person.name = "sam";
console.log(person.name); // zach

delete person.name;
console.log(person.name); // still there

// can verify configs
var configs = Object.getOwnPropertyDescriptor(person, "name");

// to prevent new properties from being added to an object, .isExtensible
Object.preventExtensions(person);

// to only allow reading and writing of current properties, restrict other modifications, .isSealed
Object.seal(person);

// for a read only object, .isFrozen
Object.freeze(person);

// https://blog.liip.ch/archive/2014/10/09/why-i-dont-use-the-javascript-new-keyword.html