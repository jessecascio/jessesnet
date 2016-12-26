



function Api() {
  this.request = require('request');
}

Api.prototype.doWork = function() {
  this.request({
        method: 'GET',
        uri: 'https://google.com'
    }, function(error, response, body){
      console.log(response);
    });
};

// export the class
module.exports = Api;

/**
 * @var Object
 */

 /*
var request = require('request');

module.exports.doWork = function ()
{
  // this.api.doWork();
  request({
        method: 'GET',
        uri: 'https://google.com'
    }, function(error, response, body){
      console.log(response);
    });
}

*/