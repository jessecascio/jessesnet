
import { DynamoDB } from 'aws-sdk';

/**
 * where the magic happens
 */
export default class Controller
{
  private docclient: DynamoDB.DocumentClient;

  constructor() {
    this.docclient = new DynamoDB.DocumentClient({})
  }

  /**
   * get some
   * @param {object}
   * @return {object}
   */
  work(path: string, querystring: string) {
    return new Promise((resolve, reject) => {
      return resolve({ path, querystring });
    });
  }
}
