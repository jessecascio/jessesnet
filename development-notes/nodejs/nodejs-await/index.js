
require('babel/register')({
    // optional: ['bluebirdCoroutines'] 
    optional: ['es7.asyncFunctions']
});

// var dust    = promise.promisifyAll(require("dustjs-helpers")); // wont need w/ es7.asyncFunctions
// var dust    = require("dustjs-helpers");

// http://www.sitepoint.com/simplifying-asynchronous-coding-es7-async-functions/

var Controller = require('./Controller.js');

var c = new Controller();
c.action();
