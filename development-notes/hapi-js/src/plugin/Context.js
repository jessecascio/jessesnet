
import crypto from 'crypto';

/**
 * Set context object
 */
exports.register = (server, options, next) => {

  server.ext({type: 'onPreHandler', method: async (request, reply) => {
    
    const ckey = crypto.createHash('md5').update(`context-${brand}`).digest('hex');
    const brand = request.params.brand || 'default';

    // pull from cache
    let cached = await server.plugins.cache.get(ckey);

    if (cached) {
      server.expose(cached);
      return reply.continue();
    }

    // hit s3 for data
    let context;

    try {
      context = await server.plugins.s3.get('rendering-context', `dev/v1/${brand}/context.json`);
    } catch (e) {
      context = await server.plugins.s3.get('rendering-context', 'dev/v1/default/context.json');
    }

    try {
      cached = JSON.parse(context);
    } catch (e) {
      throw new Error('Invalid Context JSON');
    }

    // cache it and return
    server.plugins.cache.set(ckey, cached);
    server.expose(cached);

    return reply.continue();
  }});

  return next();
};

exports.register.attributes = {
  name: 'context',
  version: '1.0.0',
  multiple: false
};
