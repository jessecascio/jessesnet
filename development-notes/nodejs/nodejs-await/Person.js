
var request = require('request');

class Person
{
  
  /**
   * @var string
   */
  name;

  constructor(name)
  {
    this.name = name;
  }

  setname(name)
  {
    this.name = name;
  }

  getName() 
  {
    return this.name;
  }

  worklong()
  {
    var self = this;

    console.log(self.name+" is working long...");

    return new Promise(function (resolve, reject) {

      request({
        method: 'GET',
        uri: 'https://google.com'
      }, function(error, response, body){
        
        setTimeout(function(){
          console.log(self.name+" is working long (DONE)...");

          resolve('hielp');
        }, 2000);
        
      });

    });

  }

  workshort()
  {
    console.log(this.name+" is working short...");
  }

  chores ()
  {
    // multiple requests but wait
    let reqs = ['https://google.com','https://google.com','https://google.com'];
  
    return new Promise ((resolve, reject) => {

      let p1 = this.workhorse();
      let p2 = this.workhorse();
      let p3 = this.workhorse();

      // wait for all three promises to resolve
      Promise.all([p1,p2,p3]).then(function () {
        resolve();  
      });
      
    });
  }

  workhorse()
  {
    console.log('starting...');

    return new Promise(function (resolve, reject) {

      request({
        method: 'GET',
        uri: 'https://google.com'
      }, function(error, response, body){
        
        setTimeout(function(){
          console.log("working hourse (DONE)...");
          resolve();
        }, 5000);
        
      });

    });
  }
}

module.exports = Person;