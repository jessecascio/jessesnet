
class Service
{

  constructor() {
    this.request = require('request');
  }

  api() {
    return new Promise((resolve, reject) => {
      
      this.request('http://www.google.com', (e,r,b) => {
        console.log(r.statusCode);
        resolve();
      });

    });
  }
}

module.exports = Service;