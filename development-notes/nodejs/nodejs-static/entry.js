
// singleton
class Logstash {

  static singleton;

  static get instance() {

    if (Logstash.singleton) {
      return Logstash.singleton;
    }

    Logstash.singleton = new Logstash();
    return Logstash.singleton;
  }

  constructor() {
    console.log('created...');
  }

  log(msg) {
    console.log('message...', msg);
  }

}

// use case
let logstash = Logstash.instance;
logstash.log('hoolie who...');

// same instance
logstash = Logstash.instance;
logstash = Logstash.instance;
logstash = Logstash.instance;
logstash.log('wootie...');


/*

class Logger {
  library;

  static log(msg) {
    this.library = msg;
  }
}

class interfact {

  constructor() {
    if (this.instance) {
      return this.instance;
    }

    console.log('initd');

    this.instance = this;
  }
}

new interfact();
new interfact();

// basic static
Logger.log("voodoo");
console.log(Logger.library);

*/

/*
let logger = Logstash.instance;
logger.log('ass who');
*/

/*
class InitClass {

  static init() {
    this.item = "subtract";
  } 

  speak() {
    this.item = "add";
  }
}

InitClass.init();

let cla = new InitClass();
cla.speak();

console.log(cla.item);
*/