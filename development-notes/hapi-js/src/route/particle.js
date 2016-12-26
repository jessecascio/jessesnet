
import Controller from './../controller/Particle';

exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path: '/particle/{projector?}',
    handler: async (request, reply) => {
      let controller = new Controller();
      let particles = await controller.available();
      return reply(particles);
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'particle'
};
