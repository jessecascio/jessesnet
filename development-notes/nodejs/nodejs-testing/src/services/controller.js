
module.exports = {};

// http://stackoverflow.com/questions/20534702/node-js-use-of-module-exports-as-a-constructor
// http://fredkschott.com/post/2014/01/node-js-cookbook---constructors-and-custom-types/
// http://book.mixu.net/node/ch6.html
/**
 * @var Object
 */
var Api = require('./api.js');

module.exports.action = function ()
{
  var api = new Api();
  api.doWork();
  // console.log('okeee');
}