/*
  - an easy way to return multiple values from a function
  - dictionary keys when you need to combine more than one piece of data into key
  - can use tuples when there's a constant structure (set values per pos), lists should be used for lists of homo values
  - tuples are mutable in javascript (even with const)
  - can have any number values
*/

let x: [string, number] = ["hello", 10];

console.log(x[0]);
x[0] = "world";
console.log(x[0]);

let y: [string, number, string, number] = ['a', 4, 'b', 5];
