
import Memcached from 'memcached';


/**
 * cache'r
 */
exports.register = (server, options, next) => {

  const settings = {
    poolSize: 100,
    timeout: 1000,
    retry: 500
  };

  const cache = server.app.config.memcached ? new Memcached(server.app.config.memcached, settings) : undefined;

  server.expose('get', (key) => {
    return new Promise((resolve, reject) => {
      if (!cache) {
        return resolve(false);
      }

      try {
        cache.get(key, (e, data) => {
          if (e) {
            return resolve(false);
          } else {
            return resolve(data);
          }
        });
      } catch (e) {
        return reject(e);
      }
    });
  });

  server.expose('set', (key, data, ttl=3600) => {
    if (cache) {
      cache.set(key, data, ttl, (err) => {});
    }
  });

  return next();
};


exports.register.attributes = {
  name: 'cache',
  version: '1.0.0',
  multiple: false // single shared instance
};
