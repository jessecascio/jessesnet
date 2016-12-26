
import fs from 'fs';
import Config from './config/Config';

/**
 * Dynamically load internals
 */
export default class Bootstrap
{
  /**
   * @return object
   */
  static config() {
    return Config.load();
  }

  /**
   * @return array
   */
  static routes() {
    const config = Config.load();
    const files = fs.readdirSync(`${__dirname}/route`);
    const routes = files.map((file) => {
      return {
        register: require(`${__dirname}/route/${file}`),
        routes: {
          prefix: `/${config.version}`
        }
      };
    });

    return routes;
  }

  /**
   * @return array
   */
  static plugins() {
    const files = fs.readdirSync(`${__dirname}/plugin`);
    const plugins = files.map((file) => {
      return require(`${__dirname}/plugin/${file}`);
    });

    return plugins;
  }
}
