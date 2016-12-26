
/**
 * Handle auth yo
 */
exports.register = (server, options, next) => {

  server.register({register: require('hapi-auth-bearer-token')}, function(err) {
    server.auth.strategy('default', 'bearer-access-token', true, {
      accessTokenName: 'token',
      allowQueryToken: true,
      validateFunc: (token, cb) => {
        if (server.app.config.token && token === server.app.config.token) {
          return cb(null, true, {token: token});
        } else {
          return cb(null, false, {token: token});
        }
      }
    });
  });

  return next();
};

exports.register.attributes = {
  name: 'auth',
  version: '1.0.0'
};
