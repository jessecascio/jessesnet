
module.exports =  class Arrow
{
  
  constructor ()
  {
    this.request = require('request');
  }

  /**
   * demo1
   */
  init()
  {
    this.sign = "virgo";

    let obj = {
      name: "sup",
      sign: "leo",
      callback: () => {
        this.funky();
      }
    };

    /*
    let obj = {
      name: "sup",
      sign: "leo",
      callback: this.funky
    };  
    */

    // console.log(this.sign);

    obj.callback();

    // console.log(this.sign);
  }

  funky ()
  {
    // console.log(this.sign);
    this.sign = "taurus";
  }

  /**
   * demo2
   */
  demo()
  {
    // dont do this
    let self = this;

    this.request({
        method: 'GET',
        uri: 'https://google.com'
      }, (function(error, response, body){
        // console.log(this.sign);
        // console.log("working long (DONE1)...");
      }).bind(this)); 

    // or
    this.request({
        method: 'GET',
        uri: 'https://google.com'
      }, (error, response, body) => {
        // console.log(this.sign);
        // console.log("working long (DONE2)...");
      }); 
  }

  /**
   * demo 3
   */
  params (person)
  {
   // console.log(Object.getPrototypeOf(person));
  }
}

// Object.defineProperty(person, firstName, { writable: false })
