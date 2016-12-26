import Hapi from 'hapi';
import Bootstrap from './src/Bootstrap';

// define server
const server = new Hapi.Server();
server.connection({
  port: 8080,
  routes: {cors: true}
});

// load config vars into server
server.app.config = Bootstrap.config();

// set up dependencies
let plugins = [];

// load internal routes/plugins
plugins = plugins.concat(Bootstrap.plugins());
plugins = plugins.concat(Bootstrap.routes());

// letsss goooo
server.register(plugins, (e) => {

  if (e) {
    throw e;
  }

  // Start the server
  server.start(() => {
    console.log('Server running at:', server.info.uri);
  });
});
