
/**
 * ENV conditional config load
 */
export default class Config
{
  /**
   * return config obj for ENV
   * @return object
   */
  static load() {
    let config = require('./../config/stage.json');

    // conditional env load
    if (process.env) {
      switch (process.env.ENV) {
        case 'dev':
          config = require('./../config/dev.json');
          break;
        case 'prod':
          config = require('./../config/prod.json');
          break;
      }

      // track env throughout application
      config.env = 'dev';

      // grab sensitives from ENV vars for prod|stage
      if (process.env.ENV === 'prod' || process.env.ENV === 'stage') {
        config.env = process.env.ENV;
        config.token = process.env.TOKEN;
        config.aws = {
          accessKeyId: process.env.ACCESSKEYID,
          secretAccessKey: process.env.SECERETACESSKEY,
          region: 'us-west-2'
        };
      }

      if (process.env.ENV === 'prod') {
        config.memcached = process.env.MEMCACHED;
      }
    }

    return config;
  }
}
