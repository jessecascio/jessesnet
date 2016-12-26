
import Joi from 'joi';

exports.register = function (server, options, next) {

  // can access config vars
  // server.app.config.var

  // can access plugins
  // server.plugins.MyPlugin

  // config: {auth: 'default'}

  server.route({
    method: 'GET',
    path: '/render/{projector}/{brand?}',
    handler: function (request, reply) {
      reply(server.plugins.context);
    }
  });

  server.route({
    method: 'POST',
    path: '/render/{projector}/{brand?}',
    config: {
      validate: {
        payload: {
          pronto: Joi.object().required()
        }
      }
    },
    handler: function (request, reply) {
      // pass context into controller
      // 
      // controller will analyze context
      //  load the applicable particles if not done
      //  grab the template
      //  return article
      reply('holla');
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'render'
};
