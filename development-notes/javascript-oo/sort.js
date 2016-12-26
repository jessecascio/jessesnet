
/*

*/
var arr = [1,2,5,23,42,12,34];
// console.log(arr.sort()); // wont sort numbers

// how to sort by keys
arr.sort(function(v1,v2) {
	return v1 - v2;
});

console.log(arr);