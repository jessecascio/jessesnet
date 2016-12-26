
/**
 * ENV conditional config load
 */
export default class Config
{
  /**
   * load config for ENV
   * @return {object}
   */
  static load() {
    let config;

    switch (process.env.ENV) {
      case 'local':
        config = require('./config/local.js');
        break;
      default:
        config = require('./config/production.js');
    }

    return config.values;
  }
}
