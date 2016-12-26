
import AWS from 'aws-sdk';

/**
 * where the magic happens
 */
export default class Controller
{
  /**
   * @param {object}
   */
  constructor(config) {
    // class dependencies
    this.docclient = new AWS.DynamoDB.DocumentClient(config.dynamodb);
  }

  /**
   * get some
   * @param {object}
   * @return {object}
   */
  async work({ path, querystring }) {
    return { path, querystring };
  }
}
