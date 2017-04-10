/*
  - more friendly names to sets of numeric values
  - can also grab key from index
*/

enum ListIndex {Seattle, Bremerton, 'Port Orchard'}

// defaults to printing index
let index = ListIndex['Port Orchard'];
console.log(index);

// WONT compile
// index = ListIndex.Detriot;

let city = ListIndex[1];
console.log(city);
