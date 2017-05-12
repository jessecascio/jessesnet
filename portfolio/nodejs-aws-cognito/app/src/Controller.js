
import { CognitoUserPool } from 'amazon-cognito-identity-js';

export default class Controller {

  static user() {
    const poolData = {
      UserPoolId : 'us-east-1_kvwQVUn9E', 
      ClientId : '7adacdq3cnhcjjot9a28vtlgir' 
    };
    const userPool = new CognitoUserPool(poolData);
    return userPool.getCurrentUser();
  }
}