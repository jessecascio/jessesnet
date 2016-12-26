
console.log(typeof ello);
console.log(ello instanceof Function);
ello();

/*
	Function declarations are hoisted to top during run time i.e. can be declared later
*/
function ello()
{
	console.log("ello...");
}

/*
	Must be declared before being able to be used
*/
var uhoh = function()
{
	console.log("uhoh");
};

console.log(typeof uhoh); // also function
console.log(uhoh instanceof Function);
uhoh();

/*
	Can overload functions
	If multiple with same name (regardless of signature) last will be used
*/

var too = function()
{
	for (var i in arguments) {
		console.log(arguments[i]);
	}
}

too('wee');
too('wee','p');

/*
	this references current scope
	can manipyulate this with call(), apply(), and bind()
*/
var house = {

	address: "1263 W 7th Dr",
	city: "mesa",
	state: "az",

	getAddress: function () {
		return this.address + " " + this.city + ", " + this.state;
	}

}

console.log(house.getAddress());

