
// anything declared in global scope is only instantiated once and shared
let Bluebird = require('bluebird');
let dust = Bluebird.promisifyAll(require('dustjs-helpers'));

exports.register = (server, options, next) => {
  
  // all object customization, functions here
  dust.config.whitespace = true;

  // can expose entire object which will be accesible in routes via:
  // server.plugins.<name> i.e. from attributes
  server.expose(dust);

  // or can name: server.expose('funky', function)
  // accessible via: server.plugins.<name>.funky 
 
  return next();
};

exports.register.attributes = {
  name: 'dust',
  version: '1.0.0',
  multiple: false // single shared instance
};
