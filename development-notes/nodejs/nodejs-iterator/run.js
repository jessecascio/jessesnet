
let SimpleBook = require('./SimpleBook');
let simplebook = new SimpleBook();

console.log("SIMPLE BOOK");

for (let person of simplebook) {
  console.log("person:", person.name);
  console.log("info:", `${person.info.city}, ${person.info.state}`);
}

console.log("\nADDRESS BOOK");

let AdressBook = require('./AdressBook');
let adressbook = new AdressBook();

for (let person of adressbook) {
  console.log("person:", person.name);
  console.log("info:", `${person.info.city}, ${person.info.state}`);
}

console.log("\nADDRESS BOOK MAP");

let AdressBookMap = require('./AdressBookMap');
let adressbookmap = new AdressBookMap();

for (let person of adressbookmap) {
  console.log("person:", person.name);
  console.log("info:", `${person.info.city}, ${person.info.state}`);
}

console.log("\nASYNC ITERATION");

let Async = require('./Async');
let async = new Async();

for (let op of async) {
  console.log("person:", op);
}